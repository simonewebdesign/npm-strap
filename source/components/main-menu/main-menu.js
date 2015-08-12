import React from 'react';

export default class MainMenu extends React.Component {
  render() {
    return (
      <ul className="main-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/notfound">Not a page</a></li>
      </ul>
    );
  }
}
