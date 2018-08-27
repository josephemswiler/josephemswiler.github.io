import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Projects.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class ProjectSlide extends Component {
  style = () => ({
    container: {
      background: this.props.project.background,
      height: 400,
      width: '100%',
    //   position: 'relative',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      zIndex: 1,
    },
    mobileWrapper: {
        display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mobile: {
        position: 'absolute',
        width: '100%',
        top: -220,
        left: 0,
        zIndex: 0
    },
    name: {
      fontWeight: 900,
    },
    icon: {
      margin: 10,
      fontSize: '2rem',
      color: '#fff'
    },
    description: {
        zIndex: 1000
    }
  })

  render () {
    return (
      <Container style={this.style().container} className='rounded'>
        <Row style={this.style().row}>
          <Col>
          <h1 style={this.style().name}>
          {this.props.project.name}
          </h1>
              <a href={this.props.project.github !== 'Modal' ? this.props.project.github : 'https://josephemswiler.com/'} target='_blank'>
                <FontAwesomeIcon
                className='icon'
                  style={this.style().icon}
                  icon={['fab', 'github']}
                />
              </a>
              <a href={this.props.project.link !== 'Modal' ? this.props.project.link : 'https://josephemswiler.com/'} target='_blank'>
                <FontAwesomeIcon
                  className='icon'
                  style={this.style().icon}
                  icon={['fas', 'external-link-square-alt']}
                />
              </a>
              <Row>
                  <Col style={this.style().mobileWrapper}>
                  <img style={this.style().mobile} src={this.props.project.mobileImage} alt='a preview of this app on a mobile device' />
                  </Col>
                  <Col>
                  <p className='mt-3 text-left' style={this.style().description}>{this.props.project.description}</p>
                  </Col>
              </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
