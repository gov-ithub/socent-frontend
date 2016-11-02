
// Transform to Stateless Functional Components when finished

import React, { Component } from 'react'
import {Drawer, Card, CardHeader, Menu, Divider, IconButton,  MenuItem } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500 } from 'material-ui/styles/colors'
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue500,
  },
});

export default class Sidebar extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Drawer open={this.props.open}>
          <IconButton onTouchTap={this.props.handleToggleSidebar}><NavigationClose/></IconButton>
            <Card>
              <CardHeader
                title={this.props.profile.name}
                subtitle='Bine ai venit'
                avatar={this.props.profile.picture}
              />
            </Card>
            <Menu>
              <MenuItem primaryText="Link1" />
              <MenuItem primaryText="Link2" />
              <MenuItem primaryText="Add link" />
            </Menu>
          <div id="leftNavFooter" style={{position: 'absolute', bottom: 0, width: '100%', overflow: 'hidden'}}>
            <Divider />
            <Menu>
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help & About"  />
            </Menu>
          </div>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
