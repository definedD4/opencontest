import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { PageHeader } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { StyleRoot } from 'radium';

import { user } from './auth';
import Login from './containers/auth/Login';
import ContestList from './containers/ContestList';
import Workspace from './containers/workspace/Workspace';

class App extends Component {
  render() {
    const LoginSection = (props) => (
      <div>
        <PageHeader className="text-center">Welcome!</PageHeader>
        <h4 className="text-center">Please sign in below or <Link to="/register">register</Link> to continue.</h4>
        <Login redirectOnSuccess="/contest"/>
      </div>
    );

    const PrivateSection = (props) => (
      <div>
        <Navbar />
        <div style={{ maxWidth: '1000px', margin: 'auto', display: 'block' }}>
          <div style={{ margin: '10px' }}>
            <h4>Pick one of the contests below to start participating.</h4>
            <ContestList />
          </div>
        </div>
      </div>
    );

    return (
      <StyleRoot>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={LoginSection} />
            <PrivateRoute path="/contest" exact component={PrivateSection} />
            <PrivateRoute path="/contest/:id" exact component={({ match }) => <Workspace contestId={+match.params.id}/>} />
            <Route render={props => <Redirect to="/login"/>}/>
          </Switch>
        </BrowserRouter>
      </StyleRoot>
    );
  }
}

export default App;

const PrivateRoute = ({ component: Component, ...rest }, context) => (
  <Route {...rest} render={props => (
    user() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
);