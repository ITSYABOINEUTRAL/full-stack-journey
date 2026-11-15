const express = require('express');
const router = express.Router();

const { registerController, checkEmailController, loginController, me } = require('../controllers/auth.controllers');

router.post('/signup', registerController)
router.post('/login', loginController)
router.post("/check-email", checkEmailController);
router.get('/me', me)

module.exports = router;