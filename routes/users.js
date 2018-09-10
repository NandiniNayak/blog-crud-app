const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// require model
require('../models/User')
// create user model
const User = mongoose.model('users');

// registration route
router.get('/register', (req, res) => {
  res.render('users/register');
});
// post route to capture data from the form and save to db
router.post('/register', (req, res) => {
  // res.send('In the post route');
  console.log(req.body);
  
})


// Login route
router.get('/login', (req, res) => {
  res.render('users/login');
});

module.exports = router;
