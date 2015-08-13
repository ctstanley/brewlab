// IMPORTANT!!!!
// -------------
// Remember:
// require where you need it
// change the styles path
// change the element name
// create associated stores?
// Other stuff

// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');
// Local Files
var Actions = require('../actions');
var utl = require('../utils/utl');
var UserStore = require('../stores/users-store');
// Elements
var styles = utl.styles.pages.BoilerPlatePage;
var Paper = mui.Paper;

var BoilerPlatePage = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  mixins : [
    Reflux.listenTo(UserStore, '_onChange'),
  ],
  getInitialState () {
    return {
      user: null,
    }
  },
  componentWillMount () {
    return null
  },
  render () {
    return <div>
    </div>
  },
  _onChange (event, user) {
    this.setState({ user })
  },
});

module.exports = BoilerPlatePage;
