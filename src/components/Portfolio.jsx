import React, { Component } from 'react'
import NavBar from './NavBar'
import Title from './Title'
import Social from './Social'
import Hex from './Hex'
import portfolioData from './data.json'

class Portfolio extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='portfolio' />
        <section className='paper'>
          <Hex data={portfolioData} />
        </section>
        <Social />
      </div>
    )
  }
}

export default Portfolio
