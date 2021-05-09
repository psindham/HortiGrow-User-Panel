// const Users = mongoose.model('Users');
const Users = require('../models/user');

exports.getSignupForm = (req, res, next) => {
    res.render('signup', { path: '/signup', pageTitle: 'Sign up', name: 'Edward'})
}

exports.postSignup = (req, res, next) => {
    new users({
            UserFullname:req.body.UserFullname,
            Email: req.body.Email,
            Password: req.body.Password,
            Address: req.body.Address,
            City: req.body.City,
            State: req.body.State,
            Zipcode: req.body.Zipcode,
        }).save()
        .then(result => {
            res.redirect('/');
        }).catch(err => {
            throw new Error('Save User failed');
        });
}