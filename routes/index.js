var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.send({ title: 'Express' });
});

router.get('/user/:name', function(req, res, next) {
  request({
  url: 'https://www.instagram.com/'+req.params.name+'/?__a=1',
  json: true
}, function(error, response, body) {
  console.log(body);
  res.send(body['user']['media']['nodes']);
});
  //res.send({ title: 'Express', name: req.params.name });
});

module.exports = router;
