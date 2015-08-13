// This component contains the Header to simplify the
// inheritance chain.  Was having problems with owner,
// a React relationship, != parent, a DOM relationship.

// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');

// Local Files
var Actions = require('./actions');
var utl = require('./utils/utl');
var UserStore = require('./stores/users-store');

// Components
var Paper = mui.Paper

var FlatButton = mui.FlatButton

var Main = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext() {
        return {
            muiTheme: utl.themeManager
        };
    },
    mixins: [
        Reflux.listenTo(UserStore, '_onChange')
    ],
    getInitialState() {
        return {
            user: null,
        }
    },
    render() {
        var user = this.state.user
        return <Paper >
            {this.state.user ? this._loggedOut() : this._loggedIn()}
        </Paper >
    },
    _loggedIn() {
       return <FlatButton label={"Login"} onClick={Actions.login}/>
        // Actions.login()
    },
    _loggedOut() {
        return <FlatButton label={"Logout"} onClick={Actions.logout}/>
        // Actions.logout()
    },
    _onChange(event, user) {
      console.log(user)
        this.setState({
            user
        })
    },
});

module.exports = Main;