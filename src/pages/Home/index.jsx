import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Link to="/register" href="/register">Register</Link>
  </Fragment>
);

export default Home;
