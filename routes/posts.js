var express = require('express');
var router = express.Router();
var Post = require('../models/post');

//Routes for Posts
router.get('/', function(req, res) {
  Post.find({}, function(error, postList) {
    res.json(postList);
  });
});

router.get('/:id', function(req, res) {
  Post.find({
    _id: req.params.id
  }, function(error, post) {
    res.json(post);
  });
});


/* GET post listing. */
router.post('/', function(req, res) {
    Post.create(new Post({
      content : req.body.content,
      created_at : req.body.created_at
    }))
});

router.patch('/:id', function(req, res) {
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

router.delete('/:id', function(req, res) {
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

module.exports = router;
