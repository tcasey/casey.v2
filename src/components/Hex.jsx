import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Img } from 'glamorous'

import './Hex.css'

class Hex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  render () {
  // List of Funds displayed as an unordered list of hexagons
    const hexTile = this.state.data.map((tile) => (
      <li
        key={tile.id}
        className='hex'
        value={tile.val}
      >
        {/* individual hexagon 'tiles' */}
        <div className='hex-in'>
          <Link
            to={`/details/${tile.val}`}
            >
            <div className='hex-content'>
              <Img
                width='80%'
                src={`../svg/${tile.title}`}
                alt={tile.title}
              />
            </div>
          </Link>
        </div>
      </li>
    ))

    return (
      <ul className='hex-grid'>
        {hexTile}
      </ul>
    )
  }
}

Hex.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Hex
