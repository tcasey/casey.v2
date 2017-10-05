import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Span } from 'glamorous'

import Logo from './Logo'
import Menu from './Menu'

class Navbar extends Component {
  render () {
    return (
      <header className='nav-container'>
        <Menu />
        <NavLink
          to='/'
          className='logo-link'
        >
          <Logo />
        </NavLink>
        <Span
          width={70}
        />
      </header>
    )
  }
}

export default Navbar
