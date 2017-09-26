import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'react-loading-indicator';

import api from '../../api';
import Navbar from '../../Navbar';
import TaskSelectPanel from './TaskSelectPanel';
import TaskWorkspace from './TaskWorkspace';

const Loading = () => (
  <div style={{ width: '400px', margin: 'auto', marginTop: '400px' }}>
    <h3 className="text-center">Loading...</h3>
    <LoadingIndicator style={{ display: 'block', margin: "auto" }} />
  </div>
)

export default class Workspace extends Component {
  constructor() {
    super();

    this.state = {
      contest: null,
      selectedTask: null,
    }
  }

  componentDidMount() {
    api.contest.byId(this.props.contestId)
      .then(contest => this.setState({ contest, selectedTask: contest.Tasks[0] }));
  }

  render() {
    const { contest, selectedTask } = this.state;

    if (!contest) {
      return <Loading />;
    }

    return (
      <div>
        <Navbar />
        <TaskSelectPanel
          title={contest.name}
          tasks={contest.Tasks}
          selectedId={selectedTask.id}
          onSelect={selectedTask => this.setState({ selectedTask })}
        />
        <TaskWorkspace taskId={selectedTask.id}/>
      </div>
    );
  }
}

Workspace.propTypes = {
  contestId: PropTypes.number.isRequired,
};