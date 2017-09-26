import React, { Component } from 'react';
import Auth from './Auth'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    const User = (props, context) => (
      <div>
        <p>{context.auth.user}</p>
        <p>{context.auth.err ? context.auth.err.stack : ""}</p>
        <Button onClick={() => context.auth.login("maretskii@gmail.com", "123")}>Login</Button>
        <Button onClick={() => context.auth.logout()}>Logout</Button>
      </div>
    );

    User.contextTypes = {
      auth: PropTypes.object.isRequired
    }

    return (
      <Auth>
        <User/>
      </Auth>
    );
  }
}

export default App;
