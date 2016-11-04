
// Transform to Stateless Functional Components when finished

import React, { Component } from 'react'
import { Link } from 'react-router'
import {Drawer, Card, CardHeader, Divider, IconButton} from 'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { lightBlue500 } from 'material-ui/styles/colors'

import NavigationClose from 'material-ui/svg-icons/navigation/close'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionStore from 'material-ui/svg-icons/action/store'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import ActionHelp from 'material-ui/svg-icons/action/help'
import SocialPeople from 'material-ui/svg-icons/social/people'
import {List, ListItem} from 'material-ui/List';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue500,
  },
});

export default class Sidebar extends Component {
  state = {
    openNavItem: false,
  };

  handleToggle = () => {
    this.setState({
      openNavItem: !this.state.openNavItem,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      openNavItem: item.state.openNavItem,
    });
  };
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Drawer
          open={this.props.open}
          style={{root: {top: '64px'}}}>
          <IconButton onTouchTap={this.props.handleToggleSidebar}><NavigationClose/></IconButton>
            <Card>
              <CardHeader
                title={this.props.profile.name}
                subtitle='Bine ai venit'
                avatar={this.props.profile.picture}
              />
            </Card>
            <List>
              <ListItem
                primaryText="Dashboard"
                leftIcon={<ActionHome />}
                containerElement={<Link to="/admin" />} />
              <ListItem
                primaryText="Intreprinderi"
                leftIcon={<ActionStore />}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Lista"
                    containerElement={<Link to="/admin/intreprinderi" />}/>,
                  <ListItem
                    key={2}
                    primaryText="Inregistrare"
                    containerElement={<Link to="/admin/inregistrare" />}/>,
                ]}
              />
              <ListItem
                primaryText="Utilizatori"
                leftIcon={<SocialPeople />}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                  <ListItem
                    key={1}
                    primaryText="Lista"
                    containerElement={<Link to="/admin/utilizatori" />}/>,
                ]}
              />
            </List>

          <div id="leftNavFooter" style={{position: 'absolute', bottom: 0, width: '100%', overflow: 'hidden'}}>
            <Divider />
            <List>
              <ListItem
                primaryText="Profil"
                leftIcon={<ActionSettings />}
                containerElement={<Link to="/admin/profil" />} />
              <ListItem
                primaryText="Ajutor"
                leftIcon={<ActionHelp />}
                containerElement={<Link to="/admin/ajutor" />} />
            </List>
          </div>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
