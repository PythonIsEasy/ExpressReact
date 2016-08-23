var React = require("react");
var Nav = require("../views/nav");

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <h1><strong>{this.props.text}</strong></h1>
            </div>
        );
    }
});


var Index = React.createClass({
    render: function () {
        return(
            <html>
            <head>
                <title>React</title>
                <link rel="stylesheet" href="stylesheets/bootstrap.min.css"/>

            </head>
            <body>
                <Nav />
                <Header text="Hello with React and Express" />
                
            </body>
            </html>
        )
    }
});

module.exports = Index;