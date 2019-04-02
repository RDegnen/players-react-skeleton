import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { FormGroup, Label, Button } from 'reactstrap';

import constants from '../../constants';
import InputForm from '../../components/InputForm';

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
      <FormGroup row>
        <Label for="login">Login</Label>
        <Button type="submit" value="Submit" id="login">Submit</Button>
      </FormGroup>
    ),
  },
];

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    loginUser(this.state, history);
  }

  render() {
    return (
      <InputForm
        formGroups={formGroups}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Login);
