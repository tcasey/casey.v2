import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Div, Span, Strong, Img } from 'glamorous'

class Details extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,
      title: this.props.active
    }
  }
  render () {
    const {
      data,
      active
    } = this.props

    return (
      <Div
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        padding={40}
      >
        <Span
          padding={16}
        >
          {data[active].desc}
        </Span>
        <Span
          padding={16}
        >
          <Strong
            textAlign='center'
          >
            Tech used:
          </Strong>
          {
            data[active].tech.map((row, idx) => {
              return (
                <Span
                  display='flex'
                  justifyContent='center'
                  flexDirection='column'
                  alignItems='center'
                  paddingTop={10}
                  key={idx}>
                  {row}
                </Span>
              )
            })
          }
        </Span>
        <Img
          width='10%'
          src={`../svg/${data[active].logo}`}
          alt={data[active].val}
        />
      </Div>
    )
  }
}

Details.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
}

export default Details
