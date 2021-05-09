const mongoose = require('mongoose');

const OrderSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    products:[
      {
        type: Types.ObjectId,
        ref: "products"
      }
    ],
  });