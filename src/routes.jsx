import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPage from './pages/Register';
import Roster from './pages/Roster';
import LoginPage from './pages/Login';
import NewPlayerPage from './pages/Player/NewPlayer';

export const pages = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'Register',
  },
  {
    path: '/roster',
    component: Roster,
    nav: true,
    name: 'Roster',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'Login',
  },
  {
    path: '/player/new',
    component: NewPlayerPage,
    nav: true,
    name: 'New Player',
  },
];

const routes = pages.map(({ path, component, ...props }) => (
  <Route path={path} component={component} key={path} {...props} />
));

export default routes;
