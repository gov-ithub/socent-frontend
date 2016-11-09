// @flow
import React, { PropTypes as T, Component, Element } from 'react'
import { IndexLink } from 'react-router'

import AuthService from './utils/AuthService'
import type { UserProfile } from './utils/AuthService'
import './App.css'
import logo from '../public/logo.png'
import Img from './components/Img'

import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import Login from './layout/Login'
import LoggedIn from './layout/LoggedIn'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { lightBlue500 } from 'material-ui/styles/colors'

import { AppBar } from 'material-ui'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: lightBlue500,
  },
});

type Props = {
  auth: AuthService,
  children?: Element<any>,
  className?: string
}
type State = {
  profile: UserProfile,
  open: boolean
}

const styles = {
  containerPublic: {
    margin: '0px auto',
    width: '80vw'
  },
  containerPrivate: {
    margin: '0px auto',
    width: '100vw',
    display: "block",
    paddingLeft: 300,
    minHeight: "calc(100vh - 50px)",
    paddingTop: 90
  },
  svg: {
    color: {lightBlue500}
  }
};

class App extends Component {

  static contextTypes = {
    router: T.object
  }
  props: Props;
  state: State;

  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      profile: this.props.auth.getProfile(),
      open: true
    }
    this.props.auth.on('profile_updated', (newProfile) => {
      this.setState({ profile: newProfile})
    });
  }
  logout() {
    this.props.auth.logout();
    this.context.router.push('/');
    this.setState({profile: {}})
  }
  handleToggleSidebar() {
    this.setState({ open: !this.state.open })
  }
  render(): Element<any> {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.auth
      })
    }
    let sidebar = null
    if (this.props.auth.isLoggedIn()) {
      if (this.state.profile) {
        sidebar = <div>
          <Sidebar
            location={children}
            profile={this.state.profile}
            open={this.state.open}/>
          </div>
      }
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <AppBar
            onLeftIconButtonTouchTap={this.props.auth.isLoggedIn() ? () => this.setState({
              open: !this.state.open
            }) : null}
            title={<IndexLink to="/" className="logo"><Img src={logo} alt="Bine ati venit" /></IndexLink>}
            style={{backgroundColor: '#004990', position: 'fixed'}}
            iconClassNameLeft={!this.props.auth.isLoggedIn() ? 'hidden' : null }
            iconElementRight={this.props.auth.isLoggedIn() ? <LoggedIn profile={this.state.profile} auth={this.props.auth} logout={this.logout.bind(this)} /> : <Login onTouchTap={this.props.auth} />}
          />
        <div style={!this.props.auth.isLoggedIn() ? styles.containerPublic : styles.containerPrivate}>
          {sidebar}
          <div>
            {children}
          </div>
        </div>
        <Footer auth={this.props.auth}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
