import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { login } from '../../auth';
import LoginForm from '../../components/auth/LoginForm';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      err: null,
      loggedIn: false,
    }
  }

  onSubmit({ email, password }) {
    login(email, password)
      .then(({ user, err }) => {
        if(user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ err: err });
        }
      })
  }

  render() {
    if(this.state.loggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <LoginForm onSubmit={cred => this.onSubmit(cred)} err={this.state.err} />
    );
  }
}