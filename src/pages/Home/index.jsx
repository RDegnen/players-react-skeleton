import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Link to="/register" href="/register">Register</Link>
    <Link to="/login" href="/login">Login</Link>
  </Fragment>
);

export default Home;
