import React, { Component } from 'react'
import NavBar from './NavBar'
import Title from './Title'

class Portfolio extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='portfolio' />
      </div>
    )
  }
}

export default Portfolio
