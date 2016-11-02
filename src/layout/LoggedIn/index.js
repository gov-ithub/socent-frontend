
// Transform to Stateless Functional Components when finished

import React, { Component, PropTypes as T } from 'react'

import { Avatar, IconButton, IconMenu, MenuItem, FontIcon} from 'material-ui'
import { lightBlue500 } from 'material-ui/styles/colors'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
export default class LoggedIn extends Component {
  //props: Props;

  static contextTypes = {
    router: T.object
  }

  logout() {
    this.props.onTouchTap.logout();
    this.context.router.push('/');
  }
  render(): Element<any> {

    const { profile } = this.props
    let avatar = null
    if (profile.picture) {
      avatar = <Avatar
          src={profile.picture}
          size={30}
        />
    }
    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton
              style={{
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                marginTop: "5px",
                padding: "5px",
                marginRight: "10vw"
              }}>
              <MoreVertIcon
                color={lightBlue500} />
            </IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Profile" />
          <MenuItem primaryText="Help" />
          <MenuItem
            onTouchTap={this.props.logout} >
            {avatar}
            <FontIcon
              className="fa fa-sign-out"
              style={{marginLeft:"20px", verticalAlign:"middle" }}
              />
          </MenuItem>
        </IconMenu>
      </div>
    );
  }
}
