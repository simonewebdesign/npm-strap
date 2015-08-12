import React from 'react';
import '../../polyfills/array/fill';

export default class UsersPage extends React.Component {

  render() {
    let usersList = new Array(20).fill(1).map((v,k) => {
      return <li><a href={`/users/${k+1}`}>User #{k+1}</a></li>;
    });

    return (
      <div>
        <h1>Listing users</h1>
        {usersList}
      </div>
    )
  }
}
