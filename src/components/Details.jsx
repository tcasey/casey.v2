import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Span, Img } from 'glamorous'

import { Paper, Emphasis, Container } from './styles'

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
      <Paper>
        <Emphasis>
          description:
        </Emphasis>
        <Container>
          {data[active].desc}
        </Container>
        <Container>
          <Emphasis>
            tech used:
          </Emphasis>
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
        </Container>
        <Paper>
          {
            data[active].img.map((image, idx) => {
              return (
                <Img
                  padding={16}
                  key={idx}
                  width={300}
                  src={`../projects/${image}`}
                  alt={`../projects/${image}`}
                />
              )
            })
          }
        </Paper>
        <Emphasis>
          check it out:
        </Emphasis>
        <a
          href={`${data[active].link}`}
          target='blank'
        >
          <Img
            width={80}
            src={`../svg/${data[active].logo}`}
            alt={data[active].val}
          />
        </a>
      </Paper>
    )
  }
}

Details.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
}

export default Details
