import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

export default class Spacebnb extends Component {
  style = () => ({
    container: {
      background: `radial-gradient(circle, #33d9b2, #00adb4, #347f99, #465567, #333333)`,
      height: 400,
      width: '100%',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }
  })

  render () {
    return (
      <Container style={this.style().container} className='rounded'>
        <Row style={this.style().row}>
        Spacebnb
          </Row>
      </Container>
    )
  }
}
