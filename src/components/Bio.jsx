import React, { Component } from 'react'
import NavBar from './NavBar'
import Title from './Title'

class Bio extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='bio' />
      </div>
    )
  }
}

export default Bio
