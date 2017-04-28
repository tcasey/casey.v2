import React, { Component } from 'react'
import Title from './Title'
import NavBar from './NavBar'
import Social from './Social'
import portfolioData from './portfolio.json'
import Details from './Details'

class Info extends Component {
  render () {
    const title = `${this.props.match.params.id}`
    return (
      <div>
        <NavBar />
        <Title secondary={title} />
        <section className='paper' >
          <Details data={portfolioData} active={title} />
        </section>
        <Social />
      </div>
    )
  }
}

export default Info
