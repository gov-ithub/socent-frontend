import React, {PropTypes} from "react";
import {browserHistory} from "react-router";
import API from "../api/API";

export default function requiresAuth(Component) {
  return class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      let api = new API();
      if (!api.isLoggedIn()) {
        browserHistory.push("/login");
      }
    }

    render() {
      return (
        <div className="authenticated">
          {<Component {...this.props} />}
        </div>
      );
    }
  };
}
