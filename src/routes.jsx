import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Roster from './pages/Roster';
import Login from './pages/Login';
import NewPlayer from './pages/Player/NewPlayer';

const pages = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/roster',
    component: Roster,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/player/new',
    component: NewPlayer,
  },
];

const routes = pages.map(({ path, component, ...props }) => (
  <Route path={path} component={component} key={path} {...props} />
));

export default routes;
