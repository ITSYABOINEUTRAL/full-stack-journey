const bcrypt = require("bcryptjs");
const { AppDataSource } = require("../config/data-source");
const { signToken, toPublicUser } = require("../utils/jwt");

const userRepo = () => AppDataSource.getRepository("User");

// POST /api/auth/register   body: { fullName, email, password } = payload
async function register(req, res) {
  const { fullName, email, password } = req.body ?? {};

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "fullName, email and password are required" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
  }

  const normalisedEmail = email.trim().toLowerCase();
  const existing = await userRepo().findOneBy({ email: normalisedEmail });
  if (existing) {
    return res.status(409).json({ message: "Email is already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10); // 10 = how hard to crack

  const user = userRepo().create({
    fullName,
    email: normalisedEmail,
    password: hashedPassword,
    role: "student", // NEVER take role from the body on public sign-up
  });
  const savedUser = await userRepo().save(user);

  res.status(201).json({ token: signToken(savedUser), user: toPublicUser(savedUser) });
}

// GET /api/auth/login   body: { email, password }
async function login(req, res) {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }

  // password has select:false, so we must ask for it explicitly here
  const user = await userRepo().findOne({
    where: { email: email.trim().toLowerCase() },
    select: { id: true, fullName: true, email: true, role: true, isActive: true, password: true },
  });

  // Same message for "no such email" and "wrong password":
  // don't tell attackers which emails exist
  const passwordOk = user && (await bcrypt.compare(password, user.password));
  if (!passwordOk) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  if (!user.isActive) {
    return res.status(403).json({ message: "This account has been deactivated" });
  }

  res.json({ token: signToken(user), user: toPublicUser(user) });
}

// GET /api/auth/me   (needs a token)
async function me(req, res) {
  res.json(req.user);
}

module.exports = { register, login, me };