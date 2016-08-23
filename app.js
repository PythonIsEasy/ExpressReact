var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var expressValidator = require("express-validator");
var mongo = require("mongodb");
var mongoose = require("mongoose");
var flash = require("connect-flash");

require('babel-core/register')({
  presets: ['es2015', 'react']
});

// mongo db server
mongoose.connect("mongodb://localhost/AngularNode");
var db = mongoose.connection;

// routes
var routes = require('./routes/index');
var users = require('./routes/users');
var profile = require('./routes/profile');

// express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Express-Session
app.use(session({
  secret: "secret",
  cookie: {maxAge: 60000},
  saveUninitialized: true,
  resave: true
}));

//connect Flash
app.use(flash());

//passport
app.use(passport.initialize());
app.use(passport.session());

//Express Validator
app.use(expressValidator({
  errorFormatter: function (param,msg,value) {
    var namespace = param.split(".")
        ,root = namespace.shift()
        ,formParam = root;
    while(namespace.length){
      formParam += "["+namespace.shift()+"]";
    }
    return{
      param:formParam,
      msg:msg,
      value:value
    };
  }
}));

// Global Vars
app.use(function (req,res,next) {
  global.user =req.user||null;
  next();
});

app.use('/react', routes);
app.use('/register', users);
app.use('/profile',profile);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
