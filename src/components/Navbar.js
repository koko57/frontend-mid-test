import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = e => {
    let nav = document.querySelector('.navbar');
    window.scrollY > 50 ? nav.classList.add('navbar--blue') : nav.classList.remove('navbar--blue')
  };

  render() {
    return (
      <nav className="navbar">
        <NavLink exact to="/" className="navbar__link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/create" className="navbar__link" activeClassName="active">
          New House
        </NavLink>
        <NavLink to="/list" className="navbar__link" activeClassName="active">
          Houses
        </NavLink>
        
      </nav>
    );
  }
}

export default withRouter(Navbar);
