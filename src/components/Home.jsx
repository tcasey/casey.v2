import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Title from './Title'
import logo from '../logo.svg'

class Home extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='JavaScript Developer' />
        <section className='paper'>
          <div className='home-container'>
            <div className='home-image'>
              <div className='svg-container'>
                <img src={logo} className='logo' alt='tcasey logo' />
              </div>
            </div>
            <div className='home-content'>
              <p>
                I'm a creative developer with an obession for clean code and an eye for design
              </p>
              <p>
                I'm currently working as a Full Stack JavaScript Developer at
                <a className='employer' target='blank' href='https://www.vivintsolar.com'> Vivint.solar</a>.
              </p>
              <p className='paragraph-link'>Check out my
                <Link to='/portfolio'> portfolio</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
