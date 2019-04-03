import React from 'react';
import { FormGroup, Label, Button, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import constants from '../../constants';
import FormContainer from '../../components/FormContainer';

const createPlayer = (data, history) => {
  const authToken = localStorage.getItem('token');
  return fetch(`${constants.API_URL}/api/players`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then(() => {
      history.push('/roster');
    })
    .catch(err => err);
};

const formGroups = [
  {
    field: 'first_name',
    type: 'text',
    id: 'firstName',
    label: 'First Name',
  },
  {
    field: 'last_name',
    type: 'text',
    id: 'lastName',
    label: 'Last Name',
  },
  {
    field: 'rating',
    type: 'number',
    id: 'rating',
    label: 'Rating',
  },
  {
    renderGroup: handleInput => (
      <FormGroup row>
        <Label for="handedness">Handedness</Label>
        <Input type="select" name="handedness" id="handedness" onChange={handleInput}>
          <option value="" disabled selected>Select a Hand</option>
          <option>left</option>
          <option>right</option>
        </Input>
      </FormGroup>
    ),
  },
  {
    renderGroup: () => (
      <FormGroup className="justify-content-center" row>
        <Button type="submit" value="Submit" id="create">Create</Button>
      </FormGroup>
    ),
  },
];

export const NewPlayer = ({ history }) => (
  <FormContainer history={history} formGroups={formGroups} submitAction={createPlayer} />
);

NewPlayer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(NewPlayer);
