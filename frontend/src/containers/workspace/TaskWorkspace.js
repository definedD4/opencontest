import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskViewer from './TaskViewer';

export default class TaskWorkspace extends Component {

  render() {
    const { taskId } = this.props;
    return (
      <TaskViewer taskId={taskId}/>
    );
  }
}

TaskWorkspace.propTypes = {
  taskId: PropTypes.number,
};