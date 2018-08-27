import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Events extends Component {
  style = () => ({
    container: {
      background: `radial-gradient(circle, #f7f1e3, #c7bbb5, #938a8a, #605d5f, #333333)`,
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
            Events
          </Col>
        </Row>
      </Container>
    )
  }
}
