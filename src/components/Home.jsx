import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Img } from 'glamorous'

import { Main } from './styles'
import NavBar from './NavBar'
import Title from './Title'
import Social from './Social'
import logo from '../logo.svg'

class Home extends Component {
  render () {
    return (
      <Main>
        <NavBar />
        <Title secondary='JavaScript Developer' />
        <section className='paper'>
          <div className='home-container'>
            <div className='home-image'>
              <div className='svg-container'>
                <Img
                  src={logo}
                  className='logo'
                  width={175}
                  paddingBottom={50}
                  alt='tcasey logo'
                />
              </div>
            </div>
            <div className='home-content'>

              <p>
                Currently I'm working as a Full Stack JavaScript Developer at
              <br />
                {/* <a
                  className='employer'
                  target='blank'
                  href='https://www.vivintsolar.com'
                > */}
                 Vivint.solar
                {/* </a> */}
              </p>
              <p className='paragraph-link'>Check out my
              <br />
                <Link to='/portfolio'>portfolio</Link>
              </p>
            </div>
          </div>
        </section>
        <Social />
      </Main>
    )
  }
}

export default Home
