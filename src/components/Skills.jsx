import React, { Component } from 'react'
import NavBar from './NavBar'
import Title from './Title'

class Skills extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='skills' />
      </div>
    )
  }
}

export default Skills
