// Node Modules
var Reflux = require('reflux');
var Firebase = require('firebase');
var _ = require('lodash');

// Local Files
var utl = require('../utils/utl');
var Actions = require('../actions');

// Firebase Auth data
// https://www.firebase.com/docs/web/guide/login/google.html

module.exports = Reflux.createStore({
    listenables: [Actions],
    _baseRef: new Firebase(utl.firebaseUrl),
    _googleAuthOptions: {
        remember: 'sessionOnly',
        scope: 'email'
    },
    // Public methods
    // Sends user data thru actions to requesting element
    getCurrentUser() {
        this.trigger('change', this._currentUser)
    },
    // Triggers login flow.  Button held in main.jsx
    login() {
        this._usersRef = this._baseRef.child('users');
        this._baseRef.onAuth(this._onAuth)
        this._baseRef.authWithOAuthPopup('google', this._login, this._googleAuthOptions);
    },
    // Logs out logged in user
    logout() {
        this._baseRef.unauth()
        this._baseRef.offAuth(this._onAuth)
        this._userRef.off('value', this._handleDbChange)
    },
    // Private methods
    // Called by login.  Callback for OAuth.  Recursive for TRANSPORT_UNAVAILABLE.
    _login(error, authData) {
        if (!!error && error.code === "TRANSPORT_UNAVAILABLE") {
            this._baseRef.authWithOAuthRedirect('google', this._login, this._googleAuthOptions)
        } else if (error) {
            this._handleLoginError(error)
        }
    },
    // Fires on auth events.  If it is an unauth() authData == null else it is individual authData
    _onAuth(authData) {
        if (authData) {
            // Checks if user is already in DB.
            // Yes calls this._setCurrentUser with the return snapshot
            // No stores user data and calls this._setCurrentUser with set data
            this._usersRef.child(authData.uid).once('value', this._checkUser)
        } else {
            // Make this._currentUser = null
            this._setCurrentUser(authData)
        }
    },
    _checkUser(snapshot) {
        var profile = snapshot.val()
        if (profile) {
            this._setCurrentUser(profile)
            this._userRef = this._usersRef.child(profile.uid)
            this._userRef.on('value', this._handleDbChange)
        } else {
            this._saveUserData(this._baseRef.getAuth())
        }
    },
    _saveUserData(authData) {
        var startProfile = this._newUserProfile(authData)
        this._usersRef.child(authData.uid).set(startProfile)
        this._userRef = this._usersRef.child(startProfile.uid)
        this._userRef.on('value', this._handleDbChange)
        this._setCurrentUser(startProfile)
    },
    _handleLoginError(error) {
        this._baseRef.child('errors').push({
            error
        });
        console.log(error)
    },
    _handleDbChange(snapshot) {
        this._setCurrentUser(snapshot.val())
    },
    _setCurrentUser(profile) {
        this._currentUser = profile
        this.trigger('change', this._currentUser);
    },
    _newUserProfile(authData) {
        return {
            email: authData.google.email,
            name: authData.google.displayName,
            profileImageURL: authData.google.profileImageURL,
            uid: authData.uid
        }
    },
});