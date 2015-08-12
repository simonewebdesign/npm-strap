import React from 'react';
import page from 'page';

// pages
import HomePage      from './pages/home';
import UsersPage     from './pages/users/index';
import UserShowPage  from './pages/users/show';
import NotFoundPage  from './pages/not-found';

export default class Router extends React.Component {

  // Since we are going to deal with routes inside componentDidMount the initial
  // load of our component won't have this.state.component yet, so let's set a
  // default value for that.
  constructor(props) {
    super(props);
    this.state = {component: <div />};
  }

  componentDidMount() {
    let self = this;

    page('/', ctx => {
      self.setState({component: <HomePage params={ctx.params} />});
    });

    page('/users', ctx => {
      self.setState({component: <UsersPage params={ctx.params} />});
    });

    page('/users/:id', ctx => {
      self.setState({component: <UserShowPage params={ctx.params} />});
    });

    page('*', ctx => {
      self.setState({component: <NotFoundPage params={ctx.params} />});
    });

    page();
  }

  // return a component that's stored in state.
  render() {
    return this.state.component;
  }
}
