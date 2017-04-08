import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

class Bio extends Component {
  render () {
    return (
      <section className='header'>
        <h1>
          <Link to='/' className='hvr-float-shadow'>
            Trevor Casey
          </Link>
        </h1>
        <br />
        <small>{this.props.secondary}</small>
      </section>
    )
  }
}

Bio.propTypes = {
  secondary: PropTypes.string
}

export default Bio
