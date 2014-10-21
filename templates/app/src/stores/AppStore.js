'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _data = {
  todos: [
    {item:'React', id: 0},
    {item:'Flux', id: 1},
    {item:'Gulp', id: 2},
    {item:'Express Server', id: 3},
    {item: 'Mongo Database', id: 4}]
};

var AppStore = merge(EventEmitter.prototype, {
  
  getData: function(){
    return _data;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  if(action.actionType === AppConstants.ADD){
    var text = action.text + ' to Dispatcher to Store and back';
    _data.message = text;
    var id;
    if (_data.todos.length > 0) {
      id = _data.todos[_data.todos.length-1].id + 1;
    } else {
      id = 0;
    }
    _data.todos.push({item:action.text, id: id});
  }

  if(action.actionType === AppConstants.REMOVE){
    for (var i = 0; i < _data.todos.length; i++) {
      if (_data.todos[i].id === action.id) {
        _data.todos.splice(i, 1);
        break;
      }
    }
  }

  AppStore.emitChange();

});



module.exports = AppStore;