import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarNavi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 3,
    };
  }
  handleChange = (event, index, key) => this.setState({key});

  render() {
    return (
      <MuiThemeProvider>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu  onChange={this.handleChange}>
            {this.props.list.map(listItem => (
              <MenuItem
                key={listItem.id}
                primaryText={`Doar ${listItem.status}`}/>
                // handleClick={props.handleClick.bind(null, listItem)}
            ))}
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Sortare" />
            <FontIcon className="muidocs-icon-custom-sort" style={{color: 'black'}}/>
            <ToolbarSeparator />
            <RaisedButton label={`Adauga ${this.props.singular}`}  primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Export Lista" />
              <MenuItem primaryText="Print Lista" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    );
  }
}
