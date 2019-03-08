const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.render('shop', {path: 'shop'})
  // Render metoda bo uporabila default templating engine (tooo smo definirali z app.set!! aaaahaa :D ) in vrnila izdelek.
  //Ker so vsi views v views mapi (spet app.set) ne potrebujemo poti
});

module.exports = router;
