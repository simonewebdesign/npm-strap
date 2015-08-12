import React from 'react';
import MainMenu from './components/main-menu/main-menu';
import Router from './router';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        <Router />
      </div>
    );
  }
}

React.render(<App />, document.querySelector('main'));
