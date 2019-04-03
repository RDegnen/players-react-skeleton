import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import componentProps from '../props';

const InputForm = ({ formGroups, handleInput, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    {formGroups.map(({
      field, type, id, label, renderGroup,
    }) => (
      <Fragment key={field}>
        {renderGroup ? (
          renderGroup()
        ) : (
          <FormGroup key={`${field}Group`} row>
            <Label key={`${field}Label`} for={field}>{label}</Label>
            <Input
              key={`${field}Input`}
              type={type}
              name={field}
              id={id}
              placeholder={label}
              onChange={handleInput}
            />
          </FormGroup>
        )}
      </Fragment>
    ))}
  </Form>
);

InputForm.propTypes = {
  formGroups: componentProps.formGroupShape.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;
