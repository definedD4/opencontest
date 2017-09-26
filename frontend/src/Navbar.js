import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar as Nvbar, Nav, NavItem, Button } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

import { user, logout } from './auth';

const LogoutNavItem = withRouter(({ history }) => (
  <NavItem onClick={() =>
    logout()
      .then(() => history.push('/login'))
  }>Sign out</NavItem>
));

const LinkNavItem = withRouter(({ history, to, children }) => (
  <NavItem onClick={() => history.push(to)}>{children}</NavItem>
));

export default class Navbar extends Component {
  render() {
    return (
      <Nvbar>
        <Nvbar.Header>
          <Nvbar.Brand>
            OpenContest
          </Nvbar.Brand>
        </Nvbar.Header>
        <Nav>
          <LinkNavItem to="/">Contests</LinkNavItem>
        </Nav>
        <Nvbar.Text pullRight>
          Signed in as: {user().displayName}
        </Nvbar.Text>
        <Nav pullRight>
          <LogoutNavItem/>
        </Nav>
      </Nvbar>
    );
  }
}