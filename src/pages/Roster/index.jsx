import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';

import constants from '../../constants';

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
    this.getRoster = this.getRoster.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
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

  deletePlayer(playerId) {
    const authToken = localStorage.getItem('token');
    return fetch(`${constants.API_URL}/api/players/${playerId}`, {
      method: 'DELETE',
      headers: {
        Authorization: authToken,
      },
    }).then(res => res.json())
      .then(() => this.getRoster())
      .catch(err => err);
  }

  render() {
    const { players } = this.state;
    return (
      <Fragment>
        <div>Roster</div>
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
            <Col>
              <Button className="delete" onClick={() => this.deletePlayer(id)}>Delete</Button>
            </Col>
          </Row>
        ))}
      </Fragment>
    );
  }
}

export default Roster;
