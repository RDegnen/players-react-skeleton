import React from 'react';
import { shallow } from 'enzyme';

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
      renderGroup: jest.fn(),
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
});
