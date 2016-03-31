var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.passport) {
    unirest.get('https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)')
      .header('Authorization', 'Bearer ' + req.session.passport.user.token)
      .header('x-li-format', 'json')
      .end(function (response) {
        res.render('index', { profile: response.body });
      })
  } else {
    // console.log(req);
    res.render('index', {  });
  }
});

module.exports = router;
