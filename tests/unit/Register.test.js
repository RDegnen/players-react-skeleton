import React from 'react';
import { shallow } from 'enzyme';

import { Register } from '../../src/pages/Register';
import FormContainer from '../../src/components/FormContainer';

const getComponent = props => shallow(<Register history={{}} {...props} />);

describe('<Register />', () => {
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
