'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var NAV = require('./NavBar.jsx');


var SIGNUP  = React.createClass({
  
  render: function(){
    return (
      <div>
        <h1>Signup</h1>
      </div>
      )
  }
})

module.exports = SIGNUP;
