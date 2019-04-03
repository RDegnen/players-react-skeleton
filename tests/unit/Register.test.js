import React from 'react';
import { shallow } from 'enzyme';

import { Register } from '../../src/pages/Register';

const getComponent = props => shallow(<Register history={{}} {...props} />);

describe('<Register />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });
});
