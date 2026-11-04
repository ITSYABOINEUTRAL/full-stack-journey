const express = require('express');
const router = express.Router();

const { register, login, me } = require('../controllers/auth.controllers');

router.post('/', register)
.get('/', login)
.get('/me', me)

module.exports = router;