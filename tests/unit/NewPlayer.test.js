import React from 'react';
import { shallow } from 'enzyme';

import { NewPlayer } from '../../src/pages/Player/NewPlayer';

const getComponent = props => shallow(<NewPlayer history={{}} {...props} />);

describe('<NewPlayer />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });
});
