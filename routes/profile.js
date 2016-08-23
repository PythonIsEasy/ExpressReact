var express = require('express');
var router = express.Router();
var user=require("../models/users");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var Component = require("../views/profile");
var ComponentFactory = React.createFactory(Component);

router.get('/', function(req, res) {
    var markup = ReactDOMServer.renderToString(ComponentFactory());
    res.send(markup);
});

router.post('/',function (req,res) {
    var query = {'username':global.user.username,'name':global.user.username,'email':global.user.email};
    var newData = {'username':req.body.username,'name':req.body.name,'email':req.body.email};

    // find and update user
    user.findOneAndUpdate(query, newData, {upsert:true}, function(err){
        if (err) console.error();
        res.redirect("profile");
    });
});
module.exports = router;
