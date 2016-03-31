var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/logout', function(req, res, next) {
  res.clearCookie('user');
  res.redirect('/');
});

module.exports = router;
