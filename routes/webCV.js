var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('webCV/webCV', { title: "WenHao He's CV"});
});

module.exports = router;
