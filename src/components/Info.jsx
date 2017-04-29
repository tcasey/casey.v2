import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Title from './Title'
import NavBar from './NavBar'
import Social from './Social'
import portfolioData from './pdata.json'
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

Info.propTypes = {
  match: PropTypes.object.isRequired
}

export default Info
