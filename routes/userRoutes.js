const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/signing', userController.getSignupForm)
router.post('/signing', userController.postSignup)

module.exports = router;