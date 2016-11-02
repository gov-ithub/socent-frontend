// @flow
import React, { PropTypes as T } from 'react';
import App from '../../App';

export class Main extends React.Component {
  static contextTypes = {
    router: T.object,
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    }

    return (
      <App auth={this.props.route.auth}>
        {children}
      </App>
    );
  }
}

export default Main;
