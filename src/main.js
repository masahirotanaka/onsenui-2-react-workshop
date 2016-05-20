var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

var MyPage = React.createClass({
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Infinite scroll</div>
      </Ons.Toolbar>
    );
  },

  renderRow: function(index) {
    return (
      <Ons.ListItem key={index}>
        {`Item ${index + 1}`}
      </Ons.ListItem>
    );
  },

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.LazyList
          length={10000}
          renderRow={this.renderRow}
          calculateItemHeight={() => ons.platform.isAndroid() ? 48 : 44}
        />
      </Ons.Page>
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('app'));
});