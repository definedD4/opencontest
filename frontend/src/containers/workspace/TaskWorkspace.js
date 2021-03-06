import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { Tabs, Tab } from 'react-bootstrap';

import TaskViewer from './TaskViewer';
import SolutionWorkspace from './solution/SolutionWorkspace';

export default class TaskWorkspace extends Component {

  render() {
    const { taskId } = this.props;
    return (
      <Tabs justified id="workspace-tabs" className="full-height-tabs">
        <Tab eventKey={1} title="Task">
          <TaskViewer taskId={taskId}/>
        </Tab>
        <Tab eventKey={2} title="Solution">
          <SolutionWorkspace taskId={taskId}/>
        </Tab>
      </Tabs>
    );
  }
}

TaskWorkspace.propTypes = {
  taskId: PropTypes.number,
};