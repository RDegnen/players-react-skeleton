import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import InputForm from '../../components/InputForm';
import componentProps from '../props';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    const numberInputs = ['rating'];
    this.setState({ [name]: numberInputs.includes(name) ? parseInt(value, 10) : value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { history, submitAction } = this.props;
    submitAction(this.state, history);
  }

  render() {
    const { formGroups } = this.props;
    return (
      <InputForm
        formGroups={formGroups}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

FormContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  formGroups: componentProps.formGroupShape.isRequired,
  submitAction: PropTypes.func.isRequired,
};

export default FormContainer;
