import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskViewer extends Component {

  render() {
    const { taskId } = this.props;
    return (
      <iframe 
        src={`/api/task/${taskId}/html`}
        style={{ width: '100%', height: '100%', frameBorder: 0 }}/>
    );
  }
}

TaskViewer.propTypes = {
  taskId: PropTypes.number,
};