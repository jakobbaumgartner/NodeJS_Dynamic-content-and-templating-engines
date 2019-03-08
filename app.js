const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Uporabimo templating engine, preko express (v node.js bolj zapleteno):
app.set('view engine', 'pug');
app.set('views', 'views');
//app.set omogoča nam nastavitev globalnih vrednosti, nevem ... glej API


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).render('404')
});

app.listen(3000);
