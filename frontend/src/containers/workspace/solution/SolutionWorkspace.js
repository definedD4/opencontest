import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskViewer from './TaskViewer';

export default class SolutionWorkspace extends Component {
  render() {
    const { taskId } = this.props;
    return (
      <Tabs justified id="workspace-tabs" className="full-height-tabs">
        <Tab eventKey={1} title="Task">
          <TaskViewer taskId={taskId} />
        </Tab>
        <Tab eventKey={2} title="Solution">
          <h1>My solution</h1>
        </Tab>
      </Tabs>
    );
  }
}

TaskWorkspace.propTypes = {
  taskId: PropTypes.number,
};