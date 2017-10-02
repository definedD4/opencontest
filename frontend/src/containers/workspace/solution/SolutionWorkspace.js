import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../../api';

import SolutionList from '../../../components/workspace/solution/SolutionList';

export default class SolutionWorkspace extends Component {
  constructor() {
    super();

    this.state = {
      solutions: [],
    }
  }

  componentDidMount() {
    api.task.byId(this.props.taskId)
      .then(task => this.setState({ solutions: task.Solutions }));
  }

  render() {
    const { solutions } = this.state;

    return (
      <SolutionList solutions={solutions} onSelect={console.log} />
    );
  }
}

SolutionWorkspace.propTypes = {
  taskId: PropTypes.number,
};