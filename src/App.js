import React, {PropTypes as T, Component, Element} from "react";
import {IndexLink} from "react-router";
import "./App.css";
import logo from "../public/logo-mic.png";
import Img from "./components/Img";

import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
// import Login from './layout/Login'
// import LoggedIn from './layout/LoggedIn'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import {lightBlue900} from "material-ui/styles/colors";

import {AppBar} from "material-ui";

const muiTheme = getMuiTheme({ palette: { accent1Color: lightBlue900 } });

const styles = {
  containerPublic: { margin: "0px auto", width: "80vw" },
  containerPrivate: {
    margin: "0px auto",
    width: "100vw",
    display: "block",
    paddingLeft: 300,
    minHeight: "calc(100vh - 50px)",
    paddingTop: 90
  },
  svg: { color: { lightBlue900 } }
};

class App extends Component {
  static contextTypes = { router: T.object };

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: true,
      isLoggedIn: true,
      auth: JSON.parse(localStorage.getItem('auth'))
    };
  }

  handleToggleSidebar() {
    this.setState({ open: !this.state.open });
  }
  render(): Element<any> {
    let children = null;
    children = React.cloneElement(this.props.children, {
      isLoggedIn: this.state.isLoggedIn
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar onLeftIconButtonTouchTap={
            this.state.isLoggedIn
              ? () => this.setState({ open: !this.state.open })
              : null
          } title={<IndexLink to="/" className="logo">
              <Img src={logo} alt="Bine ati venit" />
            </IndexLink>} style={
            { backgroundColor: "#004990", position: "fixed" }
          } iconClassNameLeft={!this.state.isLoggedIn ? "hidden" : null} />
          <div style={
            !this.state.isLoggedIn
              ? styles.containerPublic
              : styles.containerPrivate
          }>
            <div>
              {this.state.open ? <Sidebar /> : <Sidebar minified />}
            </div>
            <div>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
