var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');
var session = require('express-session');
var config = require('./config/database');
var passport = require('passport');
var bcrypt = require('bcryptjs');
let Administrator = require('./models/administrator');
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

/*
-------------------------------------------------------------------------
---------------------Declaration of the application----------------------
-------------------------------------------------------------------------
*/

var app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));

/*
-------------------------------------------------------------------------
-----------------------------MIDDLEWARE----------------------------------
-------------------------------------------------------------------------
*/

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static Path to public folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

//Express validator middleware
app.use(expressValidator());



//Passport config
require('./config/passport')(passport);
//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*',function(req,res,next){
	res.locals.user = req.user || null;
	next();
});

/*
-------------------------------------------------------------------------
---------------------------GLOBAL VARIABLES------------------------------
-------------------------------------------------------------------------
*/
app.use(function(req,res,next){
	res.locals.errors = null;
	next();
});

/*
-------------------------------------------------------------------------
---------------------------API------------------------------
-------------------------------------------------------------------------
*/

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

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
          res.send(body.object.user.media.nodes);
      }
  });
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};
