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

  it('should render a player roster when the state is updated', () => {
    const component = getComponent();
    const players = [
      {
        first_name: 'Randy',
        last_name: 'Marsh',
        handedness: 'right',
        rating: 50,
        id: 1,
      },
    ];
    component.instance().setState({ players });
    expect(component.find('td').length).toBe(5);
    expect(component.find('td').first().text()).toBe('Randy');
  });
});
