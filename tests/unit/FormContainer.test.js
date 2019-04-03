import React from 'react';
import { shallow } from 'enzyme';

import FormContainer from '../../src/components/FormContainer';
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
  submitAction: jest.fn(),
  history: {},
};

const getComponent = props => shallow(<FormContainer {...defaultProps} {...props} />);

describe('<FormContainer />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should render and InputForm', () => {
    const component = getComponent();
    expect(component.find(InputForm).length).toBe(1);
  });
});
