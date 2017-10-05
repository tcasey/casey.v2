import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Bio extends Component {
  render () {
    return (
      <section className='header'>
        <h1>
          <Link to='/' className='hvr-float-shadow'>
            TREVOR CASEY
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
