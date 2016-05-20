var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

var index = 0;
var MyPage = React.createClass({
  renderToolbar: function(route, navigator) {
    const backButton = route.hasBackButton
      ? <Ons.BackButton onClick={this.handleClick.bind(this, navigator)}>Back</Ons.BackButton>
      : null;

    return (
      <Ons.Toolbar>
        <div className='left'>{backButton}</div>
        <div className='center'>{route.title}</div>
      </Ons.Toolbar>
    );
  },

  handleClick: function(navigator) {
    ons.notification.confirm('Do you really want to go back?')
      .then((response) => {
        if (response === 1) {
          navigator.popPage();
        }
      });
  },

  pushPage: function(navigator) {
    navigator.pushPage({
      title: `Another page ${index}`,
      hasBackButton: true
    });

    index++;
  },

  renderPage: function(route, navigator) {
    return (
      <Ons.Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
        <section style={{margin: '16px', textAlign: 'center'}}>
          <Ons.Button onClick={this.pushPage.bind(this, navigator)}>
            Push Page
          </Ons.Button>
        </section>
      </Ons.Page>
    );
  },

  render: function() {
    return (
      <Ons.Navigator
        renderPage={this.renderPage}
        initialRoute={{
          title: 'First page',
          hasBackButton: false
        }}
      />
    );
  }
});

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('app'));
});