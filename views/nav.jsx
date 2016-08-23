var React = require("react");

var NavRight = React.createClass({
    render: function () {
        if(global.user){
           return(
               <div>
                   <ul className="nav navbar-nav pull-right right-navbar-nav">
                       <li>
                           <form className="navbar-form pull-left" method="get" action="/index/logout">
                               <div className="form-group">
                                   <label><a href="/profile">{global.user.username}</a></label>
                               </div>
                               <div className="form-group">
                                   <input type="submit" name="logout" className="btn btn-primary" value="Logout"/>
                               </div>
                           </form>
                       </li>
                   </ul>
               </div>
           );
        }
        else{
            return(
                <div className="nav navbar-nav pull-right right-navbar-nav">
                    <form className="navbar-form pull-left" method="post" action="/react">
                        <ul className="nav navbar-nav">
                            <li>
                                <input type="text" className="form-control" placeholder="Username" name="username"/>
                            </li>
                            <li>
                                <input type="password" className="form-control" placeholder="Password" name="password"/>
                            </li>
                            <li>
                                <input type="submit" name="signin_submit" className="btn btn-primary" value="Login"/>
                            </li>
                        </ul>
                    </form>
                </div>
            )
        }
    }
});
var Nav = React.createClass({
    render: function () {
        return(
            <div>
                <nav className="navbar navbar-inverse" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#topNavBar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <p className="navbar-brand">My Home</p>
                        </div>
                        <div className="collapse navbar-collapse" id="topNavBar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="/react">
                                        <span className="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;Boards
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>&nbsp;About
                                    </a>
                                </li>
                                <li>
                                    <a href="/register">
                                        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>&nbsp;SignUp
                                    </a>
                                </li>
                            </ul>
                            <div className="right clearfix"><NavRight/></div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Nav;
