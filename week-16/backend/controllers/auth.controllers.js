const bcrypt = require("bcryptjs");
const { AppDataSource } = require("../config/data-source");
const { signToken, toPublicUser } = require("../utils/jwt");
// Reusable OTP building blocks: GENERATE + persist-shape + VERIFY.
const { createOtpMetadata, refreshOtpMetadata, verifyOtp } = require("../utils/otp");
// Reusable SEND.
const { sendOtpEmail } = require("../mail-service");

const userRepo = () => AppDataSource.getRepository("User");
const registrationRepo = () => AppDataSource.getRepository("Registration");

// Default avatars assigned by the backend.
const DEFAULT_AVATARS = {
  student:
    "https://res.cloudinary.com/db8mcyukl/image/upload/v1782897101/Passport_Photograph_w5ezww.jpg",

  teacher:
    "https://res.cloudinary.com/db8mcyukl/image/upload/v1757170438/arcana/profile_pictures/ernmnr5yr42bdhsyycwo.webp",
};

// Human-readable message for each verifyOtp() failure reason.
const OTP_FAIL_MESSAGE = {
  missing: "No pending registration found. Please sign up again.",
  expired: "This code has expired. Please request a new one.",
  invalid: "Invalid code.",
};

// Does a real (already created) account own this email?
async function userExists(normalisedEmail) {
  const existing = await userRepo().findOneBy({ email: normalisedEmail });
  return !!existing;
}

// POST /api/v1/auth/check-email
async function checkEmailController(req, res) {
  try {
    const { email } = req.body ?? {};

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const exists = await userExists(email.trim().toLowerCase());

    return res.status(200).json(exists);
  } catch (error) {
    console.error("Error checking email:", error);

    return res.status(500).json({
      message: "Something went wrong while checking the email",
    });
  }
}

// POST /api/v1/auth/signup
// Step 1 of 2. No User is created here. We GENERATE a code, PERSIST it in
// a pending Registration row (with the hashed password), and SEND it by
// email. The account only comes into existence after verify-otp.
async function registerController(req, res) {
  try {
    const { fullName, email, password } = req.body ?? {};

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "fullName, email and password are required",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const normalisedEmail = email.trim().toLowerCase();

    if (!normalisedEmail) {
      return res.status(400).json({
        message: "A valid email is required",
      });
    }

    // A real account already owns this email.
    if (await userExists(normalisedEmail)) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    // Hash the password now so the pending row never holds plaintext.
    const hashedPassword = await bcrypt.hash(password, 10);

    // 1) GENERATE the code (and its reg_metadata shape).
    const reg_metadata = createOtpMetadata();
    const otp = reg_metadata.otp;

    // 2) PERSIST it. Upsert by email: a repeat signup for the same email
    //    replaces the old pending row with a fresh code.
    let registration = await registrationRepo().findOneBy({
      email: normalisedEmail,
    });

    if (registration) {
      registration.fullName = fullName.trim();
      registration.password = hashedPassword;
      registration.reg_metadata = reg_metadata;
    } else {
      registration = registrationRepo().create({
        fullName: fullName.trim(),
        email: normalisedEmail,
        password: hashedPassword,
        reg_metadata,
      });
    }

    await registrationRepo().save(registration);

    // 3) SEND it (or log to the console in dev).
    const { delivered } = await sendOtpEmail(normalisedEmail, otp);

    return res.status(200).json({
      message: "A verification code has been sent to your email",
      email: normalisedEmail,
      // DEV ONLY: when no email credentials are configured we return the
      // code so you can demo the flow in class. Remove this in production.
      ...(delivered ? {} : { devCode: otp }),
    });
  } catch (error) {
    console.error("Signup (request OTP) error:", error);

    return res.status(500).json({
      message: "Something went wrong while starting registration",
    });
  }
}

// POST /api/v1/auth/verify-otp
// Step 2 of 2. Match the code against the pending Registration, then
// CREATE the User and drop the pending row. This is the only place a
// User is ever created.
async function verifyOtpController(req, res) {
  try {
    const { email, code } = req.body ?? {};

    if (!email || !code) {
      return res.status(400).json({
        message: "email and code are required",
      });
    }

    const normalisedEmail = email.trim().toLowerCase();

    const registration = await registrationRepo().findOneBy({
      email: normalisedEmail,
    });

    // VERIFY using the reusable helper. It checks presence, expiry and
    // the code itself, and tells us which one failed.
    const { valid, reason } = verifyOtp(registration?.reg_metadata, code);

    if (!valid) {
      // Expired codes are cleared so a stale row can't linger.
      if (reason === "expired" && registration) {
        await registrationRepo().remove(registration);
      }
      return res.status(400).json({
        message: OTP_FAIL_MESSAGE[reason] || "Invalid code.",
      });
    }

    // Guard against a race: a User with this email may have appeared.
    if (await userExists(normalisedEmail)) {
      await registrationRepo().remove(registration);
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    // CREATE the user. The password is already hashed, so store as-is.
    // Carry an audit copy of reg_metadata onto the user: same code and
    // time_sent, now verified.
    const role = "student";

    const user = userRepo().create({
      fullName: registration.fullName,
      email: registration.email,
      password: registration.password,
      role,
      avatar: DEFAULT_AVATARS[role],
      reg_metadata: {
        ...registration.reg_metadata,
        is_verified: true,
        time_updated: new Date().toISOString(),
      },
    });

    const savedUser = await userRepo().save(user);

    // The pending registration has done its job.
    await registrationRepo().remove(registration);

    return res.status(201).json({
      token: signToken(savedUser),
      user: toPublicUser(savedUser),
    });
  } catch (error) {
    console.error("OTP verification error:", error);

    return res.status(500).json({
      message: "Something went wrong while verifying the code",
    });
  }
}

// POST /api/v1/auth/resend-otp
// Issue a fresh code for an existing pending registration.
async function resendOtpController(req, res) {
  try {
    const { email } = req.body ?? {};

    if (!email) {
      return res.status(400).json({
        message: "email is required",
      });
    }

    const normalisedEmail = email.trim().toLowerCase();

    const registration = await registrationRepo().findOneBy({
      email: normalisedEmail,
    });

    if (!registration) {
      return res.status(400).json({
        message: "No pending registration found. Please sign up again.",
      });
    }

    // 1) GENERATE (refresh the blob with a new code), 2) PERSIST, 3) SEND
    //    — same three reusable steps as signup.
    registration.reg_metadata = refreshOtpMetadata(registration.reg_metadata);
    const otp = registration.reg_metadata.otp;

    await registrationRepo().save(registration);

    const { delivered } = await sendOtpEmail(normalisedEmail, otp);

    return res.status(200).json({
      message: "A new verification code has been sent",
      email: normalisedEmail,
      ...(delivered ? {} : { devCode: otp }),
    });
  } catch (error) {
    console.error("Resend OTP error:", error);

    return res.status(500).json({
      message: "Something went wrong while resending the code",
    });
  }
}

// POST /api/v1/auth/login
async function loginController(req, res) {
  try {
    const { email, password } = req.body ?? {};

    if (!email || !password || !email.trim()) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const normalisedEmail = email.trim().toLowerCase();

    // Explicitly request the password because select is false.
    const user = await userRepo().findOne({
      where: {
        email: normalisedEmail,
      },

      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
        avatar: true,
        isActive: true,
        createdAt: true,
        password: true,
      },
    });

    // Verify the submitted password against the bcrypt hash.
    const passwordOk =
      user && (await bcrypt.compare(password, user.password));

    if (!passwordOk) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        message: "This account has been deactivated",
      });
    }

    return res.json({
      token: signToken(user),
      user: toPublicUser(user),
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Something went wrong while logging in",
    });
  }
}

// GET /api/v1/auth/me
async function me(req, res) {
  return res.json(req.user);
}

module.exports = {
  checkEmailController,
  registerController,
  verifyOtpController,
  resendOtpController,
  loginController,
  me,
};
