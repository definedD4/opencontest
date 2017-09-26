import React, { Component } from 'react';
import api from './api';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      err: null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(email, password) {
    api.user.login(email, password)
      .then(res => {
        console.log(res);
        try {
          return api.user.current();
        } catch(err) {
          console.log(err);
        }
      })
      .then(user => ({ user: user, err: null }))
      .catch(err => ({ user: null, err: err }))
      .then(state => this.setState(state));
  }

  logout() {
    api.user.logout()
      .then(() => ({ user: null, err: null }))
      .catch(err => ({ user: null, err: err }))
      .then(state => this.setState(state));
  }

  getChildContext() {
    return {
      auth: {
        user: this.state.user,
        err: this.state.err,
        login: this.login,
        logout: this.logout
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Auth.childContextTypes = {
  auth: PropTypes.object
};

export default Auth;