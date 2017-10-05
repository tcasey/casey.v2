import React, { Component } from 'react'

import { Main } from './styles'
import NavBar from './NavBar'
import Title from './Title'
import Social from './Social'
import Chart from './Chart'

class Skills extends Component {
  render () {
    return (
      <Main>
        <NavBar />
        <Title secondary='skills' />
        <section className='paper'>
          <div className='skills-container'>
            <Chart />
          </div>
        </section>
        <Social />
      </Main>
    )
  }
}

export default Skills
