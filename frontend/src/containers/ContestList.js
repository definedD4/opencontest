import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import api from '../api';

const ContestListItem = ({ contest }) => (
  <ListGroupItem>
    <Link to={`/contest/${contest.id}`}>{contest.name}</Link>
  </ListGroupItem>
)

export default class ContestList extends Component {
  constructor() {
    super();

    this.state = {
      contests: [],
    }
  }

  componentDidMount() {
    api.contest.all()
      .then(contests => this.setState({ contests }));
  }

  render() {
    const { contests } = this.state;

    return (
      <ListGroup>
        {contests.map(contest => <ContestListItem key={contest.id} contest={contest}/>)}
      </ListGroup>
    );
  }
}