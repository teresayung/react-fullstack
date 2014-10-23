/** @jsx React.DOM */

jest.dontMock('../components/Home.jsx');
jest.dontMock('../stores/AppStore.js');

describe('Main app', function() {
  it('has render method', function() {

    var React = require('react/addons');
    var App = require('../components/Home.jsx');
    var TestUtils = React.addons.TestUtils;

    var testApp = TestUtils.renderIntoDocument(<App/>);

    expect(TestUtils.isCompositeComponent(testApp)).toEqual(true);
    expect(testApp.render).toBeDefined();

  });
});