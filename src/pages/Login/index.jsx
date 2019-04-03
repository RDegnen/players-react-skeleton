import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { FormGroup, Button } from 'reactstrap';

import constants from '../../constants';
import FormContainer from '../../components/FormContainer';

const loginUser = (data, history) =>
  fetch(`${constants.API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
    .then((json) => {
      localStorage.setItem('token', json.token);
      history.push('/roster');
    })
    .catch(err => err);

const formGroups = [
  {
    field: 'email',
    type: 'email',
    id: 'email',
    label: 'Email',
  },
  {
    field: 'password',
    type: 'password',
    id: 'password',
    label: 'Password',
  },
  {
    renderGroup: () => (
      <FormGroup className="justify-content-center" row>
        <Button type="submit" value="Submit" id="login">Login</Button>
      </FormGroup>
    ),
  },
];

export const Login = ({ history }) => (
  <FormContainer history={history} formGroups={formGroups} submitAction={loginUser} />
);

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Login);
