const Product = require('../models/Product');
const { use } = require('./IndexController');
const order = require('../models/orders');

exports.addToCart = (req, res, next) => {
    req.user.addToCart(req.body.productid)
        .then(() => {
            res.redirect('/cartry');
        }).catch(err => console.log(err));
}

exports.getOrderPlaced = (req, res, next)=>{
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            res.render("Index/checkout", { 
                 user:user,
                 cart: user.cart,
                 IsFilled:true,
            });
        })
        .catch(err => console.log(err));
}
exports.ConfirmOrder=(req,res,next)=>{
    var ord = new order;
       ord.addOrder(req.user)
       .then(()=>{
            res.render('Index/placed');
            //   req.user.clearCart();
        })
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            res.render("Index/cart", { 
                 cart: user.cart,
                 IsFilled:true,
            });
        })
        .catch(err => console.log(err));
}

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cartry');
        }).catch(err => console.log(err));
}

