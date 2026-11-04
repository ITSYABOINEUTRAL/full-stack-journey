const jwt = require("jsonwebtoken");

function signToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },        // payload: small, no secrets
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET); // throws if fake or expired
}

// Remove the password before sending a user to the client
function toPublicUser(user) {
  const { password, ...publicUser } = user;
  return publicUser;
}

module.exports = { signToken, verifyToken, toPublicUser };