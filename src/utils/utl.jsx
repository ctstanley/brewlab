// Contains various static assets used in the program.
// ThemeManager stored here to facilitate custom themes.

// Node Modules
var React = require('react')
var mui = require('material-ui');
// Local Files
var ENV = require('../../config/config');

var utl = {
  themeManager: new mui.Styles.ThemeManager(),
  styles: require('./styles/styles'),
  errorMessages: require('./staticAssets/errorMessages'),
  firebaseUrl: ENV.firebaseUrl
};

module.exports = utl;
