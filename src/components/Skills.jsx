import React, { Component } from 'react'

import { Main } from './styles'
import NavBar from './NavBar'
import Title from './Title'
import Social from './Social'

class Skills extends Component {
  render () {
    return (
      <Main>
        <NavBar />
        <Title secondary='skills' />
        <section className='paper' />
        <Social />
      </Main>
    )
  }
}

export default Skills
