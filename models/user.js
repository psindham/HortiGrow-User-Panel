const mongoose = require('mongoose');

const Product = require('./Product');

const UserSchema= new mongoose.Schema({
    UserFullname:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Zipcode:{
        type:Number,
        required:true
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            qty: {
                type: Number,
                required: true
            }
        }],
    }
});

UserSchema.methods.addToCart = async function(productId) {
    const product = await Product.findById(productId);
    console.log(product);
    if (product) {
        const cart = this.cart;
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
        if (isExisting >= 0) {
            cart.items[isExisting].qty += 1;
        } else {
            cart.items.push({ productId: product._id, qty: 1 });
        }
        if (!cart.totalPrice){
            cart.totalPrice = 0;
        }
        cart.totalPrice += product.price;
        return this.save();
    }
};

UserSchema.methods.removeFromCart = function(productId){
    const cart = this.cart;
    const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(productId).trim());
    if (isExisting >= 0) {
        cart.items.splice(isExisting, 1);
        return this.save();
    }
}

module.exports= mongoose.model('User',UserSchema);