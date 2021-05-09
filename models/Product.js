const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
    ProductName:{
        type:String,
        required: true
    },
    ProductDescription:{
        type:String,
        required: true
    },
    ProductStock:{
        type:Number,
        required:true
    },
    ProductImage:{
        type:String,
        required:true
    },
    ProductDate:{
        type:Date,
        required:true
    },
    ProductCategory:{
        type:String,
        required:true
    },
    ProductPrice:{
        type:Number,
        required:true
    },
});

module.exports= mongoose.model('Product',ProductSchema);