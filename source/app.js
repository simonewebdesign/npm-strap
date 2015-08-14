import React from 'react';
import MainMenu from './components/main-menu/main-menu';
import Router from './router';
import routes from './config/routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainMenu />
        <Router routes={routes} />
      </div>
    );
  }
}

React.render(<App />, document.querySelector('main'));
