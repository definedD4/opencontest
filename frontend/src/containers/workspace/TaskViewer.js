import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskViewer extends Component {

  render() {
    const { taskId } = this.props;
    return (
      <iframe src={`/api/task/${taskId}/html`}/>
    );
  }
}

TaskViewer.propTypes = {
  taskId: PropTypes.number,
};