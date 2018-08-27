import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Jello extends Component {
  style = () => ({
    container: {
      background: `radial-gradient(circle, #ffda79, #ea9d7a, #b0727a, #695363, #333333)`,
      height: '100%',
      width: '100%'
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    }
  })

  render () {
    return (
      <Container style={this.style().container} className='rounded'>
        <Row style={this.style().row}>
          <Col>
            Jello
          </Col>
        </Row>
      </Container>
    )
  }
}
