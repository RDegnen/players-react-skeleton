import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

import constants from '../../constants';

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
    this.getRoster = this.getRoster.bind(this);
  }

  componentDidMount() {
    this.getRoster();
  }

  getRoster() {
    const authToken = localStorage.getItem('token');
    return fetch(`${constants.API_URL}/api/players`, {
      headers: {
        Authorization: authToken,
      },
    }).then(res => res.json())
      .then(json => this.setState({ players: json.players }))
      .catch(err => err);
  }

  render() {
    const { players } = this.state;
    return (
      <Fragment>
        {players.map(({
          first_name: firstName,
          handedness,
          id,
          last_name: lastName,
          rating,
        }) => (
          <Row key={id}>
            <Col>{firstName}</Col>
            <Col>{lastName}</Col>
            <Col>{handedness}</Col>
            <Col>{rating}</Col>
          </Row>
        ))}
      </Fragment>
    );
  }
}

export default Roster;
