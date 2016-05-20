import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import Ons from 'react-onsenui';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
}
ReactDOM.render(<Hello name="React" />, document.getElementById("app"));
