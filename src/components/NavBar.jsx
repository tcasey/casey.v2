import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <nav className='nav-container'>
        <NavLink
          to='/'
          className='nav-link'
          // activeClassName='nav-selected'
          >
            home
        </NavLink>
        <NavLink
          to='/bio'
          className='nav-link'
          activeClassName='nav-selected'
          >
            bio
        </NavLink>
        <NavLink
          to='/skills'
          className='nav-link'
          activeClassName='nav-selected'
          >
            skills
        </NavLink>
        <NavLink
          to='/portfolio'
          className='nav-link'
          activeClassName='nav-selected'
          >
            portfolio
        </NavLink>
      </nav>
    )
  }
}

export default Navbar
