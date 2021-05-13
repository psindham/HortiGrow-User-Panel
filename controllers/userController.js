// const Users = mongoose.model('Users');
const Users = require('../models/user');

exports.getSignupForm = (req, res, next) => {
    res.render("Index/signInUser");
}

exports.postSignup = (req, res, next) => {
    console.log(req.body.inputName);
    new Users({
            UserFullname:req.body.inputName,
            Email: req.body.Email,
            Password: req.body.Password,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Zipcode: req.body.Zipcode,
        }).save()
        .then(result => {
            console.log(result);
            // req.user = result;
            // console.log(req.user);
            res.redirect('/Index');
        }).catch(err => {
            throw new Error('Save User failed');
        });
}

