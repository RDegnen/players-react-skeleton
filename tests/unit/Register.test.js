import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Register from '../../src/pages/Register';

Enzyme.configure({ adapter: new Adapter() });

const getComponent = props => shallow(<Register history={{}} {...props} />);

describe('<Register />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });
});
