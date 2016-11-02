
// Transform to Stateless Functional Components when finished

import React, { Component } from 'react'
import { lightBlue500 } from 'material-ui/styles/colors'

import { FontIcon, IconButton} from 'material-ui'
export default class Login extends Component {
  render(): Element<any> {
    return (
        <IconButton
          {...this.props}
          style={{
            borderRadius: "50%",
            marginRight: "10vw",
            width: "36px",
            height: "36px",
            marginTop: "5px",
            padding: "5px"
          }}
          onTouchTap={this.props.onTouchTap.login}>
          <FontIcon
            className="fa fa-sign-in"
            color={lightBlue500}
            style={{width: "14px", height: "14px"}}
            />
        </IconButton>
    );
  }
}
