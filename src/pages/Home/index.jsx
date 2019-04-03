import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => (
  <Fragment>
    <Link to="/register" href="/register" className="link" >Register</Link>
    <Link to="/login" href="/login" className="link" >Login</Link>
  </Fragment>
);

export default Home;
