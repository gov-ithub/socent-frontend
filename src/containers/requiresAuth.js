import React, {PropTypes} from "react";
import {browserHistory} from "react-router";
export default function requiresAuth(Component) {
  return class AuthenticatedComponent extends React.Component {
    static propTypes = { user: PropTypes.object };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      if (!this.props.user) {
        browserHistory.push("/login");
      }
    }

    render() {
      return (
        <div className="authenticated">
          {this.props.user ? <Component {...this.props} /> : null}
        </div>
      );
    }
  };
}
