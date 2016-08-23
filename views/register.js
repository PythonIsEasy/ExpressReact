var React = require("react");
var Nav = require("../views/nav");

var Register = React.createClass({
    render:function () {
        return(
            <html>
            <head>
                <title>Register</title>
                <link rel="stylesheet" href="stylesheets/bootstrap.min.css"/>
            </head>
            <body>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <h2 className="page-header">Register</h2>
                        <form method="post" action="/register" name="myForm" >
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="username"/>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password"/>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" name="confirm_psw"/>
                            </div>
                            <button type="submit" className="btn btn-default">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            </body>
            </html>
        );
    }
});

module.exports = Register;
