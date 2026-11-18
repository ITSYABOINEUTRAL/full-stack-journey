const bcrypt = require("bcryptjs");
const { AppDataSource } = require("../config/data-source");
const { signToken, toPublicUser } = require("../utils/jwt");
const { default: nodemailer } = require("nodemailer");
const {EMAIL_USER, EMAIL_PASS} = process.env
const transporter = require('../mail-service')
const userRepo = () => AppDataSource.getRepository("User");

// Default avatars assigned by the backend.
const DEFAULT_AVATARS = {
  student:
    "https://res.cloudinary.com/db8mcyukl/image/upload/v1782897101/Passport_Photograph_w5ezww.jpg",

  teacher:
    "https://res.cloudinary.com/db8mcyukl/image/upload/v1757170438/arcana/profile_pictures/ernmnr5yr42bdhsyycwo.webp",
};

// Check whether an email already exists.
async function checkEmail(email) {
  const normalisedEmail = email.trim().toLowerCase();

  const existing = await userRepo().findOneBy({
    email: normalisedEmail,
  });

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

    const emailExists = await checkEmail(email);

    return res.status(200).json(emailExists);
  } catch (error) {
    console.error("Error checking email:", error);

    return res.status(500).json({
      message: "Something went wrong while checking the email",
    });
  }
}

// POST /api/v1/auth/signup
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

    const emailExists = await checkEmail(normalisedEmail);

    if (emailExists) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    // send verification code via email
    const otp = Math.floor(100000 + Math.random() * 900000);
    
    const emailResult = await transporter.sendMail({
      from: EMAIL_USER,
      to: normalisedEmail,
      subject: "School Hub Email Verification",
      text: `Hello from School Hub! Your OTP is ${otp}. It expires in 10 minutes.`,
      signal: AbortSignal.timeout(30_000)
    });
    
    console.log("This is the result", emailResult)
    
    // // Public registration creates student accounts.
    // const role = "student";

    // // Assign the appropriate avatar.
    // const avatar = DEFAULT_AVATARS[role];

    // // Hash the password before saving it.
    // const hashedPassword = await bcrypt.hash(password, 10);

    // const user = userRepo().create({
    //   fullName: fullName.trim(),
    //   email: normalisedEmail,
    //   password: hashedPassword,
    //   role,
    //   avatar,
    // });

    // const savedUser = await userRepo().save(user);

    // return res.status(201).json({
    //   token: signToken(savedUser),
    //   user: toPublicUser(savedUser),
    // });
  }  catch (error) {
    console.error("Registration error:", error);

    return res.status(500).json({
      message: "Something went wrong while creating the account",
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
  loginController,
  me,
};
