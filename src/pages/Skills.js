import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import api from '../utils/api'

export default class Skills extends Component {
  style = () => ({
    container: {
      margin: 0,
      padding: 0,
      maxWidth: '100%'
    },
    techListWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 0
    },
    iconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 80,
      height: 100,
      alignItems: 'center'
    },
    icon: {
      height: 50,
      width: 50,
      margin: 3,
      textAlign: 'center'
    },
    iconLabel: {
      textAlign: 'center'
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
      <Row>
        <Col style={this.style().techListWrapper}>
          {api.skills.map((item, idx) => {
            return (
              <div style={this.style().iconWrapper} key={idx}>
                <a href={item.link} target='_blank'>
                  <img
                    style={this.style().icon}
                    src={item.image}
                    alt='a technology icon'
                  />
                </a>
                <span style={this.style().iconLabel}>
                  {item.name}
                </span>
              </div>
            )
          })}
        </Col>
      </Row>
    </Container>
    )
  }
}
