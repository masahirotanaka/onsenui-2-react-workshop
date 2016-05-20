var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

var MyPage = React.createClass({
  renderToolbar: function() {
    return (
      <Ons.Toolbar>
        <div className='center'>Page</div>
      </Ons.Toolbar>
    );
  },

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <section style={{margin: '16px'}}>
          This is a page
        </section>
      </Ons.Page>
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('app'));
});
