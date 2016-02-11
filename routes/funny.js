var express = require('express');
var router = express.Router();

router.get('/baby', function(req, res) {
    res.render('baby', { title : "Baby - The White Zone" });
});

router.get('/college', function(req, res) {
    res.render('college', { title : "College - The White Zone" });
});

router.get('/level', function(req, res) {
    res.render('level', { title : "Level - The White Zone" });
});

router.get('/pete', function(req, res) {
    res.render('pete', { title : "Pete - The White Zone" });
});

module.exports = router;
