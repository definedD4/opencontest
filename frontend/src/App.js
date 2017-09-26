import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { PageHeader } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import { user } from './auth.js';
import Login from './containers/auth/Login';
import ContestList from './containers/ContestList';

class App extends Component {
  render() {
    const LoginSection = (props) => (
      <div>
        <PageHeader className="text-center">Welcome!</PageHeader>
        <h4 className="text-center">Please sign in below or <Link to="/register">register</Link> to continue.</h4>
        <Login/>
      </div>
    );

    const PrivateSection = (props) => (
      <div>
        <Navbar/>
        <div style={{ maxWidth: '1000px', margin: 'auto', display: 'block' }}>
          <h4>Pick one of the contests below to start participating.</h4>
          <ContestList/>
        </div>
      </div>
    );

    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginSection}/>
          <PrivateRoute path="/" exact component={PrivateSection}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

const PrivateRoute = ({ component: Component, ...rest }, context) => (
  <Route {...rest} render={props => (
    user() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);