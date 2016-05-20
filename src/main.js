var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

var App = React.createClass({
  handleClick: function() {
    ons.notification.alert('Hello world!');
  },
  render: function() {
    return (
      <Ons.Page>
        <p>Hello World!</p>
        <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
      </Ons.Page>
    );
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
