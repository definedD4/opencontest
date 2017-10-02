import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

function SolutionList({ solutions, onSelect }) {
  return (
    <ListGroup>
      {solutions.map(solution => (
        <ListGroupItem key={solution.id}>
          <a onSelect={e => onSelect(solution.id)}>{solution.lang} - {solution.createdAt}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
    );
}

SolutionList.propTypes = {
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      lang: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};

export default SolutionList;