import React, { Fragment } from 'react';
import { Button, Table } from 'reactstrap';

import constants from '../../constants';

const columns = [
  {
    header: 'First Name',
    value: ({ first_name: firstName }) => firstName,
  },
  {
    header: 'Last Name',
    value: ({ last_name: lastName }) => lastName,
  },
  {
    header: 'Handedness',
    value: ({ handedness }) => handedness,
  },
  {
    header: 'Rating',
    value: ({ rating }) => rating,
  },
];

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
        Authorization: `Bearer ${authToken}`,
      },
    }).then(res => res.json())
      .then(json => this.setState({ players: [...json.players] }))
      .catch(err => err);
  }

  deletePlayer(playerId) {
    const authToken = localStorage.getItem('token');
    return fetch(`${constants.API_URL}/api/players/${playerId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then(res => res.json())
      .then(() => this.getRoster())
      .catch(err => err);
  }

  render() {
    const { players } = this.state;
    return (
      <Fragment>
        <h2>Roster</h2>
        <Table responsive>
          <thead>
            <tr>
              {columns.map(({ header }) => (
                <th key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {players.map(player => (
            <tr key={player.id}>
              {columns.map(({ header, value }) => (
                <td key={header}>{value(player)}</td>
              ))}
              <td key={`${player.id}Delete`}>
                <Button className="delete" onClick={() => this.deletePlayer(player.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </Table>
      </Fragment>
    );
  }
}

export default Roster;
