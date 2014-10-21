'use strict';

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

function getAppState(){
  return AppStore.getData()
};

var NAV = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  _onChange: function(){
    this.setState(getAppState());
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  handleClick: function(){
    AppActions.exampleAction('Data from View');
  },
  
  render: function(){
    return (
        <nav className="navbar navbar-default" role="navigation">
          <a className="navbar-brand" href="#">React-Flux-Fullstack</a>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Sign up</a></li>
            <li className="login"><a href="#">Login</a></li>
          </ul>
        </nav>
    );
  }
})

module.exports = NAV;