const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {title: 'Some text'})
//z render lahko uporabimo t.i. templating engine; prvi argument pove datoteko katero renderamo, drugi
//pa je objekt, ki vključuje dynamic content
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({title: req.body.title})
  res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;
// Problem takega deljenja podatkov je, da se deli z vsemi uporabniki, na vseh računalnikih!!!!
