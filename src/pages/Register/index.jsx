import React from 'react';
import { FormGroup, Label, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import constants from '../../constants';
import InputForm from '../../components/InputForm';

const createUser = (data, history) =>
  fetch(`${constants.API_URL}/api/user`, {
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
    field: 'confirm_password',
    type: 'password',
    id: 'confirmPassword',
    label: 'Confirm Password',
  },
  {
    renderGroup: () => (
      <FormGroup row>
        <Label for="register">Register</Label>
        <Button type="submit" value="Submit" id="register">Submit</Button>
      </FormGroup>
    ),
  },
];

class Register extends React.Component {
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
    createUser(this.state, history);
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

Register.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Register);
