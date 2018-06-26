import React from 'react';
import { NavLink } from 'react-router-dom';

const authLinks = props => (
  <div>
    <a href="#" onClick={props.logout} className="link">Logout</a>
  </div>
);

const unauthLinks = () => (
  <div>
    <NavLink to="/login" className="link">Login</NavLink>
    <NavLink to="/signup" className="link">Sign Up</NavLink>
  </div>
);

export default (props) => (
  <header className="main">
    <div className="brand">React Auth</div>

    {props.isAuthenticated ? authLinks() : unauthLinks() }
  </header>
);
