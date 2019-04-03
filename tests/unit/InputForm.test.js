import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from 'reactstrap';

import InputForm from '../../src/components/InputForm';

const defaultProps = {
  formGroups: [
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
        <FormGroup>
          Test
        </FormGroup>
      ),
    },
  ],
  handleInput: jest.fn(),
  handleSubmit: jest.fn(),
};

const getComponent = props => shallow(<InputForm {...defaultProps} {...props} />);

describe('<InputForm />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should have the correct amount of FormGroups', () => {
    const component = getComponent();
    expect(component.find(FormGroup).length).toBe(3);
  });
});
