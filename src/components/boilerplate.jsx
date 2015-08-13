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
var mui = require('material-ui');
// Local Files
var utl = require('../utils/utl');
// Elements
var styles = utl.styles.components.boilerPlateComponent;
var Paper = mui.Paper;

var BoilerPlateComponent = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  getInitialState () {
    return {
      state: null,
    }
  },
  componentWillMount () {
    return null
  },
  render () {
    return <div>
    </div>
  },
  _onChange (event, state) {
    if (condition) {
      this.setState({ state })
    } else {
      this.setState({ state: null })
    }
  },
});

module.exports = BoilerPlateComponent;
