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
var utl = require('../../utils/utl');

// Elements
var styles = utl.styles.staticP.BoilerPlateStatic;
var Paper = mui.Paper;

var BoilerPlateStatic = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  render () {
    return <div>
    </div>
  },
});

module.exports = BoilerPlateStatic;
