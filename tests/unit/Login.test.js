import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../../src/pages/Login';
import FormContainer from '../../src/components/FormContainer';

const getComponent = props => shallow(<Login history={{}} {...props} />);

describe('<Login />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should render FormContainer with proper history', () => {
    const history = { someKey: 'SomeValue' };
    const component = getComponent({ history });
    expect(component.find(FormContainer).props().history).toEqual(history);
  });
});
