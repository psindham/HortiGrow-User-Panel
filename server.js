require('./models/dbs');

const express = require('express');

const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
let app = express();



app.use(express.static('views/Images')); 
app.use(express.static('views/js')); 
app.use(express.static('/views/partials')); 


const IndexController = require('./controllers/IndexController');
const shopRoutes = require('./routes/shopRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const User = require('./models/user');


app.use((req, res, next) => {
    User.findById('60980847fea5491898e5fdc0')
        .then(userInDB => {
            req.user = userInDB; 
           console.log(req.user);
            next();
        })
        .catch(err => console.log(err));
});

app.use('/Index',IndexController);
app.use(userRoutes);
app.use(shopRoutes);

app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout',layoutsDir: __dirname + '/views/Layouts/' }));
app.set('view engine', 'hbs');


// app.set('views', path.join(__dirname+"/"+"views"))
// app.set('view engine', 'hbs')
// app.get('/',async (req,res)=>{
//      res.render('product');
//  });



app.listen(8080);
console.log('Running at 8080');

