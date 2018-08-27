import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Dutch extends Component {
  style = () => ({
    container: {
      background: `radial-gradient(circle, #ff5252, #cd476f, #8f4772, #57415c, #333333)`,
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
            Dutch
          </Col>
        </Row>
      </Container>
    )
  }
}
