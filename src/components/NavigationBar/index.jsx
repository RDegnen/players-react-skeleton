import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = ({ routes }) => (
  <Navbar>
    <NavbarBrand href="/">
      <h2>Players App</h2>
    </NavbarBrand>
    <Nav>
      {routes.map(({ path, name, nav }) => {
        if (!nav) return null;
        return (
          <NavItem>
            <NavLink href={path}>{name}</NavLink>
          </NavItem>
        );
      })}
    </Nav>
  </Navbar>
);

NavigationBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func,
    nav: PropTypes.bool,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavigationBar;
