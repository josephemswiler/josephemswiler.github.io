import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Projects from '../../pages/Projects'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Tooltip
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
      tooltipOpen: false
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    console.log(this.state.isOpen)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
    // this.props.toggleOverlay()
  }

  tooltipToggle () {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  style = () => ({
    navbar: {
      justifyContent: 'center',
      alignContent: 'center',
      border: 'none',
      boxShadow: 'none',
      fontFamily: `'Nunito', sans-serif`,
      color: '#fff',
      fontWeight: 300
    },
    brand: {
      position: 'absolute',
      top: 0
    },
    icon: {
      fontSize: 20
    },
    toggler: {
      fontSize: '20px',
      outline: 'none'
    },
    link: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 400
    }
  })

  render () {
    let toggleIcon = this.state.isOpen ? 'angle-up' : 'angle-down'

    return (
      <Router>
      <div>
        <Navbar
          style={this.style().navbar}
          className='transparent fixed-top'
          dark
          expand='md'
        >
          <Link
            style={this.style().brand}
            className='navbar-brand mt-2 mt-md-3'
            to='/'
          >
            Joseph Emswiler
          </Link>
          <NavbarToggler
            style={this.style().toggler}
            className='mr-auto border-0'
            onClick={this.toggle}
          >
            <FontAwesomeIcon icon={['fas', toggleIcon]} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link
                  className='nav-link'
                  style={this.style().link}
                  to='/projects'
                >
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className='nav-link'
                  style={this.style().link}
                  to='/about'
                >
                  About
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        
      </div>
      </Router>
    )
  }
}
