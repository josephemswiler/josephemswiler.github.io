import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import WIPPopover from '../components/elements/WIPPopover'
import './Projects.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class ProjectSlide extends Component {
  constructor (props) {
    super(props)

    this.state = {
      imageOpacity: 1
    }
  }

  componentDidMount () {
    this.props.updatePage('Projects')
  }

  hoverInfo = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          imageOpacity: 0.2
        })
        break
      case 'mouseleave':
        this.setState({
          imageOpacity: 1
        })
        break
      default:
    }
  }
  style = () => ({
    container: {
      background: this.props.project.background,
      maxHeight: 490,
      width: '100%',
      overflow: 'hidden'
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      zIndex: 1,
      overflow: 'hidden',
      color: this.props.project.color
    },
    mobile: {
      width: '70vw',
      maxWidth: '600px',
      objectFit: 'cover',
      maxHeight: 490,
      zIndex: 0,
      opacity: this.state.imageOpacity,
      transition: 'all 1s ease'
    },
    absoluteTop: {
      position: 'absolute',
      top: 0,
      paddingTop: 20
    },
    absoluteBottom: {
      position: 'absolute',
      bottom: 0,
      paddingBottom: 20
    },
    name: {
      fontWeight: 900
    },
    icon: {
      marginLeft: 10,
      color: this.props.project.color
    },
    description: {
      zIndex: 1,
      width: '100%',
      marginLeft: 15,
      padding: 20,
      fontSize: 20,
      position: 'absolute',
      bottom: 0,
      paddingBottom: 20
    }
  })

  renderIcons = () => {
    if (this.props.project.link !== 'Modal') {
      return (
        <h1 style={this.style().name} className='pt-2'>
          {this.props.project.name}
          <a
            href={
              this.props.project.github !== 'Modal'
                ? this.props.project.github
                : 'https://josephemswiler.com/'
            }
            target='_blank'
          >
            <FontAwesomeIcon
              className='icon'
              style={this.style().icon}
              icon={['fab', 'github']}
            />
          </a>
          <a
            href={
              this.props.project.link !== 'Modal'
                ? this.props.project.link
                : 'https://josephemswiler.com/'
            }
            target='_blank'
          >
            <FontAwesomeIcon
              className='icon'
              style={this.style().icon}
              icon={['fas', 'external-link-square-alt']}
            />
          </a>
        </h1>
      )
    } else {
      return (
        <span className='popover-wrapper pt-1'>
          <h1 style={this.style().name} className='d-inline-block'>
            {this.props.project.name}
          </h1>
          <WIPPopover projectName={this.props.project.name} />
        </span>
      )
    }
  }

  render () {
    return (
      <Container style={this.style().container} className='rounded'>
        <Row style={this.style().row}>
          <Col>
            <img
              style={this.style().mobile}
              src={this.props.project.mobileImage}
              alt='a preview of this app on a mobile device'
            />
          </Col>
          <Col
            style={this.style().absoluteTop}
            onMouseEnter={this.hoverInfo}
            onMouseLeave={this.hoverInfo}
            className='pt-0'
          >
            {this.renderIcons()}
          </Col>
          <p
            className='mt-3 d-none d-md-block'
            style={this.style().description}
          >
            {this.props.project.description}
          </p>
        </Row>
      </Container>
    )
  }
}
