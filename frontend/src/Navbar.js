import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar as Nvbar, Nav, NavItem, Button} from 'react-bootstrap';

export default class Navbar extends Component {
  render() {
    return (
      <Nvbar>
        <Nvbar.Header>
          <Nvbar.Brand>
            OpenContest
          </Nvbar.Brand>
        </Nvbar.Header>
        <Nvbar.Text pullRight>
          Signed in as: {this.context.auth.user.displayName}
        </Nvbar.Text>
        <Nav pullRight>
          <NavItem onClick={() => this.context.auth.logout()}>Sign out</NavItem>
        </Nav>
      </Nvbar>
    );
  }
}

Navbar.contextTypes = {
  auth: PropTypes.object.isRequired
}