var React = require("react");
var Nav = require("./nav");

var Check= React.createClass({
    getInitialState: function(){
        return{edit:false}
    },
    onClick: function () {
        setState({edit: !this.state.edit})
    },
    render: function () {
        if (this.state.edit) {
            return (
                <div className="form-group">
                    <form name="myForm" method="post" action="/profile">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" name="email"/>
                        </div>
                        <button type="submit" className="btn btn-success pull-right">Submit Changes</button>
                    </form>
                    <button type="submit" className="btn btn-default pull-left">Back</button>
                </div>
            );
        }
        else{
            return(
                <div className="form-group">
                    <form>
                        <h2 className="page-header">Your Data</h2>
                        <div className="form-group" >
                            <label>Username: {global.user.username}</label>
                        </div>
                        <div className="form-group">
                            <label>Name: {global.user.name}</label>
                        </div>
                        <div className="form-group">
                            <label>Email: {global.user.email}</label>
                        </div>
                        <div className="form-group">
                            <input type="button" value="Change your Data" className="btn-default" onClick={this.onClick.bind}/>
                        </div>
                    </form>
                </div>
            );
        }
    }

});

var Profile = React.createClass({
    render: function () {
        return(
            <html>
            <head>
                <title>My Profile</title>
                <link rel="stylesheet" href="stylesheets/bootstrap.min.css"/>
            </head>
            <body>
            <Nav/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <Check />
                    </div>
                </div>
            </div>
            </body>
            </html>
        );
    }
});

module.exports = Profile;