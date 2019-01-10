import React from 'react'
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar__link" activeClassName="active">Home</NavLink>
      <NavLink to="/create" className="navbar__link" activeClassName="active">New House</NavLink>
      <NavLink to="/list" className="navbar__link" activeClassName="active">Houses</NavLink>
    </nav>
  )
}

export default withRouter(Navbar)
