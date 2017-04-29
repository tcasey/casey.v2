import React, { Component } from 'react'
import { Div } from 'glamorous'

import NavBar from './NavBar'
import Title from './Title'
import Social from './Social'
import Hex from './Hex'
import portfolioData from './data.json'

class Portfolio extends Component {
  render () {
    return (
      <Div
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <NavBar />
        <Title secondary='portfolio' />
        <section className='paper'>
          <Hex data={portfolioData} />
        </section>
        <Social />
      </Div>
    )
  }
}

export default Portfolio
