import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import componentProps from '../props';
import './styles.css';

const InputForm = ({ formGroups, handleInput, handleSubmit }) => (
  <Row>
    <Col m="6" className="formCol">
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
    </Col>
    <Col m="6" />
  </Row>
);

InputForm.propTypes = {
  formGroups: componentProps.formGroupShape.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;
