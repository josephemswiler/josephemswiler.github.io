import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Found extends Component {
  style = () => ({
    container: {
      background: `radial-gradient(circle, #34ace0, #5189b4, #546987, #494c5b, #333333)`,
      height: '100%',
      width: '100%'
    }
  })

  render () {
    return (
      <Container style={this.style().container} className='rounded'>
        Found
      </Container>
    )
  }
}