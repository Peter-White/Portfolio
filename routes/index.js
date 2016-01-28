var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var Post = require('../models/post');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user : req.user });
});

// Routes for Register
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

//Routes for Posts
router.get('/post', function(req, res) {
  Post.find({}, function(error, postList) {
    res.json(postList);
  });
});

router.get('/post/:id', function(req, res) {
  Post.find({
    _id: req.params.id
  }, function(error, post) {
    res.json(post);
  });
});

// router.post('/post', function(req, res) {
//   Post.create(req.body, function(error, post) {
//     console.log(req.body);
//     if (error) {
//       console.log(error);
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(201);
//     }
//   });
// });

router.post('/post', function(req, res) {
    Post.create(new Post({
      content : req.body.content,
      created_at : req.body.created_at,
      author : req.body.author
    }))
});

router.patch('/post/:id', function(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {
    overwrite: false
  }, function(error, post) {
    if (error) {
      console.error(error);
      res.sendStatus(400);
    }
    console.log('Changed')
    res.sendStatus(200);
  });
});

router.delete('/post/:id', function(req, res) {
  Post.remove({
    _id: req.params.id
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

// //jade rendered routes
// router.get('/', function(req, res) {
//   Post.find({}, function(error, postList) {
//     if(error){
//       console.log('Error getting posts');
//     } else {
//         res.render('post', { posts: postList });
//     }
//   });
// });

// router.get('/:id', function(req, res) {
//   Post.find({
//     _id: req.params.id
//   }, function(error, post) {
//     if (error) {
//       console.log('Error getting one post');
//     } else {
//         res.render('post', { posts: post });
//     }
//   });
// });

// router.delete('/:id', function(req, res) {
//   Post.remove({
//     _id: req.params.id
//   }, function(error) {
//     if (error) {
//       console.log(error);
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(204);
//     }
//   });
// });

// Routes for Login
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/register'
}));

// Routes for Logout
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
