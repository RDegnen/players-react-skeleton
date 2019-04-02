import React from 'react';
import { shallow } from 'enzyme';

import Login from '../../src/pages/Login';

const getComponent = props => shallow(<Login history={{}} {...props} />);

describe('<Login />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });
});
