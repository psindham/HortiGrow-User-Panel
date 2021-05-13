const mongoose = require('mongoose');

const Product = require('./Product');
const User = require('./user');

const OrderSchema = new mongoose.Schema({
    userID: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    date:{
      type: Date, default: Date.now,
    },
    cart: {
      items: [{
          productId: {
              type: mongoose.Types.ObjectId,
              ref: 'Product',
          },
          qty: {
              type: Number,
          }
      }],
      totalPrice: Number
  }
  });

OrderSchema.methods.addOrder = async function(User){
      this.cart = User.cart;
      this.userID = User._id;
      this.save();
  }

module.exports= mongoose.model('Orders',OrderSchema);