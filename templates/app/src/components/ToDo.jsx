'use strict';


var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');
var ITEM = require('./Item.jsx')

var TODO = React.createClass({
 
  handleClick: function() {

    var task = this.refs.todo.getDOMNode().value.trim();
    if (task != '') {
      AppActions.addItemAction(task);
    }
    this.refs.todo.getDOMNode().value = '';
  },

  render: function(){
    // console.log(this.props.allTodos);
    var items = this.props.allTodos.map(function(item, i) {
      return <ITEM item={item} key={i}/>
    });
    return (
      <div className="container">
      <div><h1>Features:</h1></div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="New item..." ref="todo"/>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.handleClick}>Add</button>
          </span>
        </div>


        <ul className="list-group">
          {items} 
        </ul>
      </div>      
    );
  }
})

module.exports = TODO;