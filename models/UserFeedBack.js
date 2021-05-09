const mongoose=require('mongoose');

const UserFeedBack=new mongoose.Schema({
	UserFullname:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
	Comments:{
        type:String,
        required:true
    }
    });
	UserFeedBack.path('Email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
    }, 'Invalid e-mail.');

module.exports= mongoose.model('Feedback',UserFeedBack);