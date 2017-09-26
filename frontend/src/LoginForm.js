import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formId: _.uniqueId("loginForm"),
      email: "",
      password: "",
      err: null,
    }
  }

  getValidationState() {
    if(this.context.auth.err) {
      return 'error';
    } else {
      return 'success';
    }
  }

  setEmail(email) {
    this.setState({ email: email });
  }

  setPassword(password) {
    this.setState({ password: password });
  }

  onLogin() {
    this.context.auth.login(this.state.email, this.state.password);
  }

  render() {
    const { formId, email, password } = this.state;

    return (
      this.context.auth.user ? (<Redirect to="/"/>) :
      (<Panel style={{ width: '500px', margin: 'auto', marginTop: '10px', display: 'block' }}>
        <Form horizontal>
          <FormGroup controlId={formId + "_email"}>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" value={email} onChange={e => this.setEmail(e.target.value)} />
            </Col>
          </FormGroup>

          <FormGroup controlId={formId + "_password"}>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" value={password} onChange={e => this.setPassword(e.target.value)} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={() => this.onLogin()}>
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>)
    );
  }
}

LoginForm.contextTypes = {
  auth: PropTypes.object.isRequired
};