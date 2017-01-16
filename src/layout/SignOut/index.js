import React from "react";

import {FontIcon, IconButton} from "material-ui";
const SignOut = () => <IconButton {...this.props} style={
  {
    borderRadius: "50%",
    marginRight: "10vw",
    width: "36px",
    height: "36px",
    marginTop: "8px",
    padding: "5px"
  }
} onTouchTap={this.props.onTouchTap.login}>
  <FontIcon className="fa fa-sign-in" color="white" style={
    { width: "14px", height: "14px" }
  } />
</IconButton>;

export default SignOut