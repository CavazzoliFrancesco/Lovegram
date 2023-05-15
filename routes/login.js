var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.session.user) {
    // User is not authenticated, redirect to the login page
    res.redirect('/home');
  } else {
    res.render('login', { title: 'Login' });
  }
});

router.post('/', function(req, res, next) {
  const username = req.body.usr;
  req.session.user = username;
  res.redirect('/home');
});

module.exports = router;
