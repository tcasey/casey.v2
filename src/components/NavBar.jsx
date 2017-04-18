import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Span } from 'glamorous'

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
        <Span
          width={70}
        />
      </nav>
    )
  }
}

export default Navbar
