var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    User.register(new User({
      username : req.body.username,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      emailAddress : req.body.emailAddress,
      companyName : req.body.companyName
      }), req.body.password,

      function(err, user) {
        if (err) {
          return res.render('register', {info: "Sorry. There has been an error. Please try again."});
        }

        passport.authenticate('local')(req, res, function () {
          req.session.save(function (err){
            if (err) {
              return next(err);
            }
            res.redirect('/');
        });
      });
  });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/register'
}));

router.get('/logout', function(req, res) {
    req.logout();
    req.session.save(function (err){
      if (err) {
          return next(err);
      }
      res.redirect('/');
    });
});

module.exports = router;
