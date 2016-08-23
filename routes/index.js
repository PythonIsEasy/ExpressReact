var express = require('express');
var router = express.Router();
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var Component = require("../views/index");
var ComponentFactory = React.createFactory(Component);
var passport=require("passport");
var bcrypt = require("bcryptjs");
var LocalStrategy = require("passport-local");
var user=require("../models/users");


router.get("/",function (req,res) {
    // renders ReactDOM Server
    var markup = ReactDOMServer.renderToString(ComponentFactory());
    res.send(markup);
});

// Passport local strategy for authentication
passport.use(new LocalStrategy(
    function (username,password,done) {
        user.getUserByUsername(username,function (err,user) {
            if(err) throw err;
            if(!user){
                console.log("Unknown User");
                return done(null,false);
            }

            // compares the password
            comparePassword(password,user.password,function (err,isMatch) {
                if(err) throw err;
                if(isMatch){
                    return done(null,user)
                }else{
                    console.log("password wrong");
                    return done(null,false);
                }
            });
        })
    }
));

// serialize the user
passport.serializeUser(function (user,done) {
    done(null,user.id)
});

// deserialize the user
passport.deserializeUser(function (id,done) {
    user.getUserById(id,function (err,user) {
        done(err,user);
    });
});

// post method
router.post("/",
    passport.authenticate("local",
        {successRedirect:"/react",failureRedirect:"/react",failureFlash:true}
    )
);

// get method for logout
router.get("/logout", function (req,res) {
    req.logout();
    res.redirect("/react");
});


function comparePassword (candidatePassword,hash,callback) {
    // password hash with bcrypt.js
    bcrypt.compare(candidatePassword,hash,function (err,isMatch) {
        if(err) throw err;
        callback(null,isMatch)
    });
}

// export the module
module.exports = router;
