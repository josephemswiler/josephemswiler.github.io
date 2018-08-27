import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import api from '../../utils/api'
import '../Projects.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class Spacebnb extends Component {
  constructor (props) {
    super (props)

    this.state = {
      hydratedProject: this.props.project
    }
  }
  style = () => ({
    container: {
      background: `radial-gradient(circle, #33d9b2, #00adb4, #347f99, #465567, #333333)`,
      height: 400,
      width: '100%'
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
    name: {
      fontWeight: 900
    },
    icon: {
      margin: 10,
      fontSize: '2rem',
      color: '#fff'
    }
  })

  render () {
    return (
      <Container style={this.style().container} className='rounded'>
        <Row style={this.style().row}>
          <Col>
          <h1 className='pt-3' style={this.style().name}>
          {this.state.hydratedProject.name}
          </h1>
              <a href={this.state.hydratedProject.github !== 'Modal' ? this.state.hydratedProject.github : ''} target='_blank'>
                <FontAwesomeIcon
                className='icon'
                  style={this.style().icon}
                  icon={['fab', 'github']}
                />
              </a>
              <a href={this.state.hydratedProject.link !== 'Modal' ? this.state.hydratedProject.link : ''} target='_blank'>
                <FontAwesomeIcon
                  className='icon'
                  style={this.style().icon}
                  icon={['fas', 'external-link-square-alt']}
                />
              </a>
          </Col>
        </Row>
      </Container>
    )
  }
}
