import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import _ from 'lodash';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      formId: _.uniqueId("loginForm"),
      email: "",
      password: "",
    }
  }
  setEmail(email) {
    this.setState({ email: email });
  }

  setPassword(password) {
    this.setState({ password: password });
  }

  onSubmit() {
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    const { formId, email, password } = this.state;
    const { err } = this.props;
    const validationState = err ? 'error' : null;

    return (
      <Panel style={{ width: '500px', margin: 'auto', marginTop: '10px', display: 'block' }}>
        <Form horizontal>
          <FormGroup controlId={formId + "_email"} validationState={validationState}>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" value={email} onChange={e => this.setEmail(e.target.value)} />
            </Col>
          </FormGroup>

          <FormGroup controlId={formId + "_password"} validationState={validationState}>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" value={password} onChange={e => this.setPassword(e.target.value)} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={() => this.onSubmit()}>
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}

LoginForm.propTypes = {
  err: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
};