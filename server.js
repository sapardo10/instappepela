var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var session = require('express-session');
var config = require('./config/database')
  var request = require('request');
const port = process.env.PORT || 3001;
const formidable = require('formidable');
const Binary = require('mongodb').Binary;



/*
-------------------------------------------------------------------------
-----------------------DATABASE CONFIGURATION----------------------------
-------------------------------------------------------------------------
*/
var mongoose = require('mongoose');
mongoose.connect(config.database);
let db = mongoose.connection;

//Check connection to db

db.once('open', function () {
  console.log('Connected to mongoDB');
});

//check for db errors

db.on('error', function (err) {
  console.log(err);
});
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};



app.get('/user/:name', (req,res) => {


  //Step 1 - Set the headers
  var headers = {
      'User-Agent':       'Super Agent/0.0.1',
      'Content-Type':     'application/x-www-form-urlencoded'
  }

  //Step 2 - Configure the request
  var options = {
      url     : 'https://www.instagram.com/'+name+'/?__a=1',
      method  : 'GET',
      jar     : true,
      headers : headers
  }

  //Step 3 - do the request
  request(options, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log(body);
          res.send(body.object.user.media.nodes);
      }
  });
});

module.exports = app;
