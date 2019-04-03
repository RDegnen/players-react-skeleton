import React from 'react';
import { shallow } from 'enzyme';

import Roster from '../../src/pages/Roster';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
const getComponent = props => shallow(<Roster {...props} />);

describe('<Roster />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });
});
