const express = require('express');
const router = express.Router();

const {
  registerController,
  verifyOtpController,
  resendOtpController,
  checkEmailController,
  loginController,
  me,
} = require('../controllers/auth.controllers');

router.post('/signup', registerController)       // step 1: sends the OTP
router.post('/verify-otp', verifyOtpController)   // step 2: creates the account
router.post('/resend-otp', resendOtpController)
router.post('/login', loginController)
router.post("/check-email", checkEmailController);
router.get('/me', me)

module.exports = router;