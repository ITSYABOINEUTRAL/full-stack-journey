
const crypto = require("crypto");

// Reusable OTP toolkit. Any flow (signup, password reset, ...) can use
// these: GENERATE a code, build/refresh the persisted reg_metadata blob,
// and VERIFY a submitted code. Sending lives separately in mail-service.

const OTP_TTL_MINUTES = Number(process.env.OTP_TTL_MINUTES) || 10;

// --- GENERATE ---------------------------------------------------------
// A 6-digit integer OTP: 100000 .. 999999.
// crypto.randomInt is cryptographically secure, unlike Math.random().
// The lower bound of 100000 guarantees a full 6 digits (no leading zeros),
// which matters because we store the code as an int, not a string.
function generateOtp() {
  return crypto.randomInt(100000, 1_000_000);
}

// Build a fresh reg_metadata blob around a (new) code.
//   { otp, is_verified, time_sent, time_updated }
function createOtpMetadata(otp = generateOtp()) {
  const now = new Date().toISOString();
  return {
    otp,
    is_verified: false,
    time_sent: now,
    time_updated: now,
  };
}

// Put a new code into an existing blob, keeping the rest (used on resend).
function refreshOtpMetadata(meta, otp = generateOtp()) {
  const now = new Date().toISOString();
  return {
    ...meta,
    otp,
    time_sent: now,
    time_updated: now,
  };
}

// Has the code passed its time-to-live?
function isExpired(meta) {
  const sentMs = new Date(meta.time_sent).getTime();
  return Date.now() > sentMs + OTP_TTL_MINUTES * 60 * 1000;
}

// --- VERIFY -----------------------------------------------------------
// Pure check against any reg_metadata blob. Not tied to a specific entity,
// so it's reusable anywhere an OTP is stored this way.
// Returns { valid, reason } where reason is one of:
//   "missing" | "expired" | "invalid" | null
function verifyOtp(meta, code) {
  if (!meta) return { valid: false, reason: "missing" };
  if (isExpired(meta)) return { valid: false, reason: "expired" };
  if (Number(code) !== Number(meta.otp)) {
    return { valid: false, reason: "invalid" };
  }
  return { valid: true, reason: null };
}

module.exports = {
  OTP_TTL_MINUTES,
  generateOtp,
  createOtpMetadata,
  refreshOtpMetadata,
  isExpired,
  verifyOtp,
};