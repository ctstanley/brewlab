// IMPORTANT:
// Remember to create actions in actions.jsx and do proper hook ups

// Node Modules
var Reflux = require('reflux');
var Firebase = require('firebase');
var _ = require('lodash');

// Local Files
var utl = require('../utils/utl');
var Actions = require('../actions');

module.exports = Reflux.createStore({

  listenables: [Actions],

  _firebaseRef: new Firebase(utl.firebaseUrl + '/'),

  getAssets () {
    this._firebaseRef.on('value', function(assets){
      var payload = this._handleSnapshot(assest.val())
      this._setAssets(payload);
    }.bind(this));
  },
  _setAssets (articles) {
    this.Assets = assets;
    this.trigger('change',this.Assets);
  },
  _handleSnapshot (assets) {
    return _.map(assets, function (assetObject, key) {
      return {
        property: assetObject.property,
        id: key,
      }
    })
  },
});
