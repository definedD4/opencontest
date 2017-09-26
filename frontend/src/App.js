import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from './Auth'
import LoginForm from './LoginForm';
import Navbar from './Navbar';
import { Button, PageHeader } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    const LoginSection = (props) => (
      <div>
        <PageHeader className="text-center">Welcome!</PageHeader>
        <h4 className="text-center">Please sign in below or <Link to="/register">register</Link> to continue.</h4>
        <LoginForm/>
      </div>
    );

    const PrivateSection = (props) => (
      <div>
        <Navbar/>
      </div>
    );

    return (
      <Auth>
        <BrowserRouter>
          <div>
            <Route path="/login" component={LoginSection}/>
            <PrivateRoute path="/" component={PrivateSection}/>
          </div>
        </BrowserRouter>
      </Auth>
    );
  }
}

export default App;

const PrivateRoute = ({ component: Component, ...rest }, context) => (
  <Route {...rest} render={props => (
    context.auth.user ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

PrivateRoute.contextTypes = {
  auth: PropTypes.object.isRequired
};