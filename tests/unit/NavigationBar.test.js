import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'reactstrap';

import NavigationBar from '../../src/components/NavigationBar';

const defaultProps = {
  routes: [
    {
      path: '/register',
      component: jest.fn(),
      name: 'Register',
    },
    {
      path: '/roster',
      component: jest.fn(),
      nav: true,
      name: 'Roster',
    },
    {
      path: '/player/new',
      component: jest.fn(),
      nav: true,
      name: 'New Player',
    },
  ],
};

const getComponent = props => shallow(<NavigationBar {...defaultProps} {...props} />);

describe('<NavigationBar />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should have two NavLinks', () => {
    const component = getComponent();
    expect(component.find(NavLink).length).toBe(2);
  });
});
