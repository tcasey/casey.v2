import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggle: false,
      menu: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle = () => {
    this.state.toggle === false
    ? this.setState({ toggle: true, menu: true })
    : this.setState({ toggle: false, menu: false })
  }

  render () {
    return (
      <div>
        <div className='menu-wrapper'>
          <div
            className={this.state.toggle ? 'toClose' : 'toOpen'}
            onClick={this.handleToggle}
          >
            <svg width='70' height='40' className='Layer_2' x='0px' y='0px' viewBox='0 524.5 2000 2000.5' enableBackground='new 0 524.5 2000 2000.5' >

              <circle cx='1000' cy='1530' r='660' stroke='none' fill='' />

              <path className='x2' fill='none' stroke='' strokeMiterlimit='10' d='M1410.5,1235.2H589.3' />

              <path className='x2' fill='none' stroke='' strokeMiterlimit='10' d='M1410.5,1815H589.3' />

              <path className='yy' fill='none' stroke='' strokeMiterlimit='10' d='M1410.5,1524.7c0,0-821.2,0-821.2,0c-211.3,0-260,98-218.2,217.6
          l0,0.1c90.1,260.7,337.6,447.9,628.9,447.9c367.4,0,665.2-297.8,665.2-665.2c0-79-13.8-154.8-39.1-225.2' />

              <path className='yy' fill='none' stroke='' strokeMiterlimit='10' d='M589.3,1524.7c0,0,821.2,0,821.2,0c211.3,0,260-98,218.2-217.6l0-0.1
          c-90.1-260.7-337.6-447.9-628.9-447.9c-367.4,0-665.2,297.8-665.2,665.2c0,79,13.8,154.8,39.1,225.2' />

            </svg>
          </div>
          <ul className={this.state.menu ? 'menu-nav' : 'menu-nav-hide'} >
            <NavLink
              to='/'
              className='nav-link'
            >
              <li>
                home
              </li>
            </NavLink>
            <NavLink
              to='/skills'
              className='nav-link'
              activeClassName='nav-selected'
            >
              <li>
                skills
              </li>
            </NavLink>
          <NavLink
            to='/portfolio'
            className='nav-link'
            activeClassName='nav-selected'
          >
            <li>
              portfolio
            </li>
          </NavLink>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
