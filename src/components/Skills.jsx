import React, { Component } from 'react'
import NavBar from './NavBar'
import Title from './Title'
import Social from './Social'

class Skills extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='skills' />
        <section className='paper' />
        <Social />
      </div>
    )
  }
}

export default Skills
