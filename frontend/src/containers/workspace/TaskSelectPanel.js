import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';

export default class TaskSelectPanel extends Component {
  handleSelect(id) {
    this.props.onSelect(
      this.props.tasks.find(task => task.id === id)
    );
  }

  render() {
    const { title, tasks, selectedId, onSelect } = this.props;
    return (
      <Nav bsStyle="pills" activeKey={selectedId} onSelect={id => this.handleSelect(id)}>
        <NavItem disabled><bold>{title}</bold></NavItem>
        {tasks.map(task => (
          <NavItem key={task.id} eventKey={task.id}>{task.name}</NavItem>
        ))}
      </Nav>
    );
  }
}

TaskSelectPanel.propTypes = {
          title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
      })
  ),
  selectedId: PropTypes.number,
  onSelect: PropTypes.func,
};