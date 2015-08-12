import React from 'react';

export default class UserShowPage extends React.Component {
  render() {
    return <div>Showing user with id: { this.props.params.id }</div>;
  }
}
