import React from 'react';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const Header = () => (
  <div>
    <NavLink to='/'><Button color='primary'>Home</Button></NavLink>
    <NavLink to='/About'><Button color='primary'>About</Button></NavLink>
  </div>
);

export default Header;