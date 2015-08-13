// This file contains all of the Routes as well as some setup

// Need this until React v1.0.0
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Node Modules
var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');

// Local Files
var Main = require('./main')

// Components
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// Routing Tree
module.exports = (
  <Router history={new HashHistory.default}>
    <Route path='/' component={ Main } />
  </Router>
)
