import React, { Component } from 'react';
import Img from '../Img';
import './navi.css'
import { StickyContainer, Sticky } from 'react-sticky';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
export default class Navi extends Component {

  render() {
    return (
      <StickyContainer>
        <Sticky>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="logo" href="/">
                <Img src='nav-logo.jpg' alt="Bine ati venit" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/admin"><NavItem eventKey={2}>Admin</NavItem></LinkContainer>
              <LinkContainer to="/login"><NavItem eventKey={2}>Login</NavItem></LinkContainer>

              {/* {register_button}
              {login_button}
              {profile_details}
               */}
              {/* <NavItem eventKey={2} onClick={this.logout.bind(this)}>Logout</NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </Sticky>
      </StickyContainer>
    )
  }
}
