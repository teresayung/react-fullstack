var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var TODO = React.createClass({
 
  handleClick: function() {

    var task = this.refs.todo.getDOMNode().value.trim();
    AppActions.addItemAction(task);
  },

  render: function(){
    // console.log(this.props.allTodos);
    var items = this.props.allTodos.map(function(item, i) {
      return <li className="list-group-item">{item.item}<input type="checkbox"/></li>
    });
    return (
      <div className="container">
        <input ref="todo" type="text" placeholder="Hellloooo" />
        <button className="btn btn-primary" type="button" onClick={this.handleClick}> Add</button>
        <ul className="list-group">
          {items} 
        </ul>
      </div>      
    );
  }
})

module.exports = TODO;