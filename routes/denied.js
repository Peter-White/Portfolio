var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('denied', { title : "Denied - The White Zone" });
});

module.exports = router;
