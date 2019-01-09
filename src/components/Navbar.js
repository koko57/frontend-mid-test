import React from 'react'
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">New House</NavLink>
      <NavLink to="/list">Houses</NavLink>
    </nav>
  )
}

export default withRouter(Navbar)
