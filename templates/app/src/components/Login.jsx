'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var NAV = require('./NavBar.jsx');


var LOGIN  = React.createClass({
  
  render: function(){
    return (
      <div>
        <h1>Login</h1>
      </div>
      )
  }
})

module.exports = LOGIN;
