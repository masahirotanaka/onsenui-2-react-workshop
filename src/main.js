var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState() {
    return {
      counter: 0
    };
  },
  onClick() {
    var newState = { counter: this.state.counter + 1};
    this.setState(newState);
  },
  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
});

ReactDOM.render(<Counter />, document.getElementById("app"));
