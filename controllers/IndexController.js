const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Feedback = mongoose.model('Feedback');
const Product = mongoose.model('Product');

router.use(express.static(__dirname+''))

router.get('/', (req, res) => {
    res.render("Index/index");
});

router.get('/feedback',(req, res)=>{
    res.render("Index/feedback");
});

router.get('/orderhistory',(req, res)=>{
    res.render("Index/orderhistory");
});

router.get('/signInUser',(req, res)=>{
    res.render("Index/signInUser");
});

router.get('/registration',(req, res)=>{
    res.render("Index/registration");
});


router.get('/shop',(req, res)=>{
        Product.find((err, docs)=>{
            if (!err) {
                res.render("Index/shop",{
                    shop: docs
                });
            }else {
                console.log('Error in retrieving employee list :' + err);
            }
        });
});

router.get('/cart',(req, res)=>{
    res.render("Index/cart",{
        IsFilled: true
    });
});

router.post('/feed', (req, res) => {
    console.log("came");
        insertFeedBack(req, res);
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
     //   console.log(doc);
        if (!err) {
            res.render("Index/product-detail", {
                product: doc
            });
        }
    });
});



function insertFeedBack(req, res) {
    var feedback = new Feedback();
    feedback.UserFullname= req.body.firstname;
    feedback.Email = req.body.email;
    feedback.Comments = req.body.Comments;
    feedback.save((err, doc) => {
        if (!err)
            res.redirect('/index');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("Index/shop");
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'UserFullname':
                body['UserFullNameError'] = err.errors[field].message;
                break;
            case 'Email':
                body['EmailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = router;

// router.get('/shop',(req, res)=>{
//     Product.find({}).then(kittens => {
//         console.log( kittens.map(kitten => kitten.toJSON()));
//         res.render('Index/shop', {
            
//             kittens: kittens.map(kitten => kitten.toJSON())
//         })
//     })
// });

// router.get('/shop',(req, res)=>{
//     Product.find({})// execute query
//     .exec(function(err, body) {
//         if (!err) {
//             res.render("Index/shop",{
//                 shop: body
//             });
//         }else {
//             console.log('Error in retrieving employee list :' + err);
//         }
//     });
// });
