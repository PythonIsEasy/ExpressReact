var express = require('express');
var router = express.Router();
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var Component = require("../views/register");
var ComponentFactory = React.createFactory(Component);
var user = require("../models/users");

router.get('/', function(req, res, next) {
  var markup = ReactDOMServer.renderToString(ComponentFactory());
  res.send(markup);
});

router.post("/",function (req,res) {
  var email= req.body.email;
  var username= req.body.username;
  var name = req.body.name;
  var password= req.body.password;

  
  var newUser = new user({
    email: email,
    password: password,
    username: username,
    name: name
  });

  //create new user
  user.createUser(newUser,function (err,user) {
    if(err) throw  err;
    console.log(user);
  });
  res.redirect("react");
});

module.exports = router;
