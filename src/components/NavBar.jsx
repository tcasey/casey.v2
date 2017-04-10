import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'

class Navbar extends Component {
  render () {
    return (
      <nav className='nav-container'>
        <Menu />
        <NavLink
          to='/'
          className='nav-link'
        >
          <Logo />
        </NavLink>
        {/* <NavLink
          to='/skills'
          className='nav-link'
          activeClassName='nav-selected'
        >
          skills
        </NavLink> */}
        <span />
      </nav>
    )
  }
}

export default Navbar
