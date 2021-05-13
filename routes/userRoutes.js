const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const user = require('../models/user');
const router = express.Router();

router.get('/signing', userController.getSignupForm)

router.post('/register', userController.postSignup);

router.get('/register', (req, res) => {
    res.render("Index/registration");
});

module.exports = router;














// router.get('/signInUser',(req,res) => {
//     res.render("Index/signInUser");
// });