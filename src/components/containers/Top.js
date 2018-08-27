import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Projects from '../../pages/Projects'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default class NavTop extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.tooltipToggle = this.tooltipToggle.bind(this)
    this.state = {
      isOpen: false,
      tooltipOpen: false,
      closeColor: this.props.backgroundLight ? '#333' : '#fff',
      scrolling: false
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
    window.addEventListener('scroll', this.windowScroll)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.backgroundLight !== this.props.backgroundLight) {
      this.setState({
        closeColor: this.props.backgroundLight ? '#333' : '#fff'
      })
    }
  }

  windowResize = () => {
    if (window.innerWidth >= 768 && this.state.isOpen) {
      this.handleDropDownClick()
    }
  }

  windowScroll = () => {
    if (window.scrollY >= 30) {
      this.setState({
        scrolling: true
      })
    } else if (window.scrollY <= 30) {
      this.setState({
        scrolling: false
      })
    }
  }

  toggle () {
    if (!this.state.isOpen) {
      document.addEventListener('click', this.handleDropDownClick)
      this.props.toggleOverlay()
    }
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  tooltipToggle () {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  handleDropDownClick = () => {
    this.setState({
      isOpen: false
    })
    this.props.toggleOverlay()
    document.removeEventListener('click', this.handleDropDownClick)
  }

  hoverClose = event => {
    switch (event.type) {
      case 'mouseenter':
        this.setState({
          closeColor: '#ff5252'
        })
        break
      case 'mouseleave':
        this.setState({
          closeColor: this.props.backgroundLight ? '#333' : '#fff'
        })
        break
      default:
    }
  }

  style = () => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      height: this.state.isOpen ? '100%' : '',
      justifyContent: 'center',
      alignContent: 'center',
      border: 'none',
      boxShadow: 'none',
      fontFamily: `'Nunito', sans-serif`,
      color: this.props.backgroundLight ? '#333' : '#fff',
      transition: 'all 1s ease',
      fontWeight: 300,
      background: this.state.scrolling ? this.props.backgroundLight ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' : ''
    },
    brand: {
      position: 'absolute',
      top: 0,
      color: this.props.backgroundLight ? '#333' : '#fff',
      transition: 'all 1s ease',
      zIndex: 10
    },
    toggler: {
      marginTop: '2px',
      fontSize: '20px',
      outline: 'none',
      color: this.state.closeColor,
      display: this.state.isOpen ? 'none' : '',
      transition: 'all 1s ease'
    },
    collapse: {
      background: this.state.isOpen
        ? this.props.backgroundLight ? '#fff' : '#333'
        : 'transparent',
      display: this.state.isOpen ? 'block' : 'none',
      padding: this.state.isOpen ? 30 : 0,
      position: 'relative'
    },
    closeToggle: {
      display: this.state.isOpen ? 'block' : 'none',
      position: 'absolute',
      right: 20,
      top: 20,
      fontSize: 24,
      cursor: 'pointer',
      color: this.state.closeColor,
      transition: 'all 1s ease'
    },
    link: {
      fontSize: 16,
      fontWeight: 400,
      padding: this.state.isOpen ? 30 : '',
      color: this.props.backgroundLight ? '#333' : '#fff',
      transition: 'all 1s ease',
      textAlign: 'center'
    }
  })

  findRoute = page => {
  }

  render () {
    return (
      <Router>
        <Container style={this.style().container} fluid>
          <Navbar
            style={this.style().navbar}
            className='transparent fixed-top'
            expand='md'
          >
            <Link
              style={this.style().brand}
              className='navbar-brand mt-2 mt-md-3'
              to='/'
              onClick={() => this.props.updatePage('Home')}
            >
              Joseph Emswiler
            </Link>
            <NavbarToggler
              style={this.style().toggler}
              className='mr-auto border-0'
              onClick={this.toggle}
            >
              <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} onMouseEnter={this.hoverClose}
                onMouseLeave={this.hoverClose} />
            </NavbarToggler>
            <Collapse
              isOpen={this.state.isOpen}
              navbar
              style={this.style().collapse}
            >
              <FontAwesomeIcon
                icon={['fas', 'times-circle']}
                style={this.style().closeToggle}
                onMouseEnter={this.hoverClose}
                onMouseLeave={this.hoverClose}
              />
              <Nav className='mr-auto' navbar>
                <NavItem>
                  <Link
                    className='nav-link'
                    style={this.style().link}
                    to='/projects'
                    onClick={() => this.props.updatePage('Projects')}
                  >
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className='nav-link'
                    style={this.style().link}
                    to='/about'
                    onClick={() => this.props.updatePage('About')}
                  >
                    About
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route
            exact
            path='/'
            render={props => <Home updatePage={this.props.updatePage} />}
          />
          <Route
            exact
            path='/about'
            render={props => <About updatePage={this.props.updatePage} />}
          />
          <Route
            path='/projects'
            render={props => <Projects updatePage={this.props.updatePage} />}
          />
          <Route
            path='/projects/apps'
            render={props => <Projects updatePage={this.props.updatePage} />}
          />
        </Container>
      </Router>
    )
  }
}
