var express = require('express');
var request = require('request');
// Retrieve
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var secret = 'mysecret';

var url='mongodb://carnifis:123456789@ds257858.mlab.com:57858/horarioshuecos';
// Connect to the db


/* GET home page. */
router.get('/', function(req, res, next) {

  res.send({ title: 'Express' });
});

router.get('/user/:name', function(req, res, next) {
  request({
  url: 'https://www.instagram.com/'+req.params.name+'/?__a=1',
  json: true
}, function(error, response, body) {
  if(err){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  if(!body['user']){
    res.send({
      type:'ERROR',
      message: 'El usuario: '+req.params.name+' no existe en Instagram'});
  }
  else{
    res.send({
      type:'SUCCESS',
      nodes: body['user']['media']['nodes']
    });
  }
});
  //res.send({ title: 'Express', name: req.params.name });
});

router.post('/game', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if(!err) {
      console.log("We are connected");
      console.log(req.body);
    db.createCollection('games', {strict:true}, function(err, collection) {});
    var collection = db.collection('games');
    if(req.body.name1!=='')
    collection.insert(req.body);

    }
  });
res.send(req.body);
});

router.get('/games', function(req, res){
  MongoClient.connect(url, function(err, db) {
    if(!err) {
     var collection = db.collection('games');
      collection.find().toArray(function (err, documents) {
        if (err) {
          console.log(err);
        }
        else {

          console.log(documents);
          res.send(documents);
          }
        });
      }
    });

});

module.exports = router;
