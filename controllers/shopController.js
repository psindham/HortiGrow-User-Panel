const Product = require('../models/Product');

exports.addToCart = (req, res, next) => {
     console.log(req.params.id);
    req.user.addToCart(req.params.id)
        .then(() => {
            res.redirect('/cartry');
        }).catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    req.user
        .populate('cart.items.productId')
        .execPopulate()
        .then(user => {
            console.log(user);
            res.render("Index/cart", { 
                 cart: user.cart, 
                 IsFilled:true
            });
        })
        .catch(err => console.log(err));
}

exports.deleteInCart = (req, res, next) => {
    req.user.removeFromCart(req.body.prodId)
        .then(() => {
            res.redirect('/cart');
        }).catch(err => console.log(err));

}