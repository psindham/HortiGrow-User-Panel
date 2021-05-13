const mongoose = require('mongoose');
require('./user');

require('./UserFeedBack');

require('./Product');

mongoose.connect('mongodb+srv://admin:admin987@cluster0.yadal.mongodb.net/Hortigrow',{
    useNewUrlParser:true
});
mongoose.connection.on("connected",()=>{
    console.log("Connected to mongoDB using mongoose");
});
