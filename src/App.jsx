import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes, { pages } from './routes';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <Router>
    <NavigationBar routes={pages} />
    <Switch>{routes}</Switch>
  </Router>
);

export default App;
