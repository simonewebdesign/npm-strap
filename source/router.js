import React from 'react';
import page from 'page';

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

    this.props.routes.forEach(route => {
      let [url, Comp] = route;

      page(url, ctx => {
        self.setState({component: <Comp params={ctx.params} querystring={ctx.querystring} />});
      });
    });

    page();
  }

  // return a component that's stored in state.
  render() {
    return this.state.component;
  }
}
