import React, { Component } from 'react'
import { Tooltip } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default class NavBottom extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tooltipOpen: false,
      gitHubColor: this.mouseLeaveColor,
      linkedInColor: this.mouseLeaveColor,
      emailColor: this.mouseLeaveColor,
      width: window.innerWidth
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  tooltipToggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  mouseEnterColor = '#fff'
  mouseLeaveColor = 'rgba(0,0,0,.5)'


  hoverGitHub = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          gitHubColor: this.mouseEnterColor
        })
        break
      case 'mouseleave':
        this.setState({
          gitHubColor: this.mouseLeaveColor
        })
        break
      default:
    }
  }

  hoverLinkedIn = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          linkedInColor: this.mouseEnterColor
        })
        break
      case 'mouseleave':
        this.setState({
          linkedInColor: this.mouseLeaveColor
        })
        break
      default:
    }
  }

  hoverEmail = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          emailColor: this.mouseEnterColor
        })
        break
      case 'mouseleave':
        this.setState({
          emailColor: this.mouseLeaveColor
        })
        break
      default:
    }
  }

  style = () => ({
    container: {
      position: 'absolute',
      bottom: '.25rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    link: {
      margin: 15,
    },
    gitHub: {
      fontSize: 32,
      color: this.state.gitHubColor,
      transition: 'all 0.6s'
    },
    linkedIn: {
      fontSize: 32,
      color: this.state.linkedInColor,
      transition: 'all 0.6s'
    },
    email: {
      fontSize: 32,
      color: this.state.emailColor,
      transition: 'all 0.6s'
    }
  })

  render () {
    return (
      <div style={this.style().container}>
        <a
          style={this.style().link}
          href='https://github.com/josephemswiler'
          target='_blank'
          rel="noopener noreferrer"
          onMouseEnter={this.hoverGitHub}
          onMouseLeave={this.hoverGitHub}
        >
          <FontAwesomeIcon
            style={this.style().gitHub}
            icon={['fab', 'github']}
          />
        </a>

        <a
          style={this.style().link}
          href='https://www.linkedin.com/in/josephemswiler/'
          target='_blank'
          rel="noopener noreferrer"
          onMouseEnter={this.hoverLinkedIn}
          onMouseLeave={this.hoverLinkedIn}
        >
          <FontAwesomeIcon
            style={this.style().linkedIn}
            icon={['fab', 'linkedin']}
          />
        </a>
        <a
          style={this.style().link}
          href='mailto:josephemswiler@gmail.com'
          target='_blank'
          rel="noopener noreferrer"
          onMouseEnter={this.hoverEmail}
          onMouseLeave={this.hoverEmail}
        >
          <FontAwesomeIcon
            style={this.style().email}
            icon={['fas', 'envelope']}
            id='email'
          />
        </a>
        <Tooltip
          placement='top'
          isOpen={this.state.tooltipOpen}
          target='email'
          toggle={this.tooltipToggle}
        >
          JosephEmswiler@gmail.com
        </Tooltip>
      </div>
    )
  }
}
