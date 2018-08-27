// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { Container } from 'reactstrap'
// import Apps from '../pages/sub-pages/Apps'
// import ProjectSlides from '../components/elements/ProjectSlides'

// export default class Projects extends Component {
//   componentDidMount () {
//     this.props.updatePage('Projects')
//   }

//   style = () => ({
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100%',
//       width: '100%',
//       margin: 0,
//       padding: 0
//     }
//   })

//   render () {
//     return (
//       <Container style={this.style().container} fluid>
//         <ProjectSlides />
//         <Router>
//           <Route path='/apps' component={Apps} />
//         </Router>
//       </Container>
//     )
//   }
// }

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SwipeableRoutes from 'react-swipeable-routes'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap'
import './Projects.css'
import Spacebnb from './project-pages/Spacebnb'
import Jello from './project-pages/Jello'
import Found from './project-pages/Found'
import Dutch from './project-pages/Dutch'
import Events from './project-pages/Events'

const RedView = () => (
  <div style={{ height: 300, backgroundColor: 'red' }}>Red</div>
)
const BlueView = () => (
  <div style={{ height: 300, backgroundColor: 'blue' }}>Blue</div>
)
const GreenView = () => (
  <div style={{ height: 300, backgroundColor: 'green' }}>Green</div>
)
const YellowView = () => (
  <div style={{ height: 300, backgroundColor: 'yellow' }}>Yellow</div>
)

class Projects extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  componentDidMount () {
    this.props.updatePage('Projects')
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  style = () => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    },
    buttonDropDown: {
      marginTop: 85
    },
    project: {
      height: '100%',
      width: '100%'
    },
    slide: {
      padding: 15,
      minHeight: 100,
      minWidth: 100,
      color: '#fff'
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '200px',
      borderRadius: '1.5px',
      padding: 20
    },
    dropDown: {
      width: '200px',
      background: 'rgba(255,255,255,0.8)',
      borderRadius: 0
    },
    swipe: {
      width: '100%',
      height: '100%',
      marginBottom: 72
    }
  })

  render () {
    return (
      <Router>
        <Container style={this.style().container}>
          <ButtonDropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
            style={this.style().buttonDropDown}
          >
            <DropdownToggle style={this.style().button}>
              <span className='mt-1'>Featured Projects</span>
            </DropdownToggle>
            <DropdownMenu
              style={this.style().dropDown}
              className='rounded-bottom'
            >
              <Link to='/projects/spacebnb'>
                <DropdownItem>
                  Spacebnb
                </DropdownItem>
              </Link>
              <Link to='/projects/jello'>
                <DropdownItem>
                  Jello
                </DropdownItem>
              </Link>
              <Link to='/projects/found'>
                <DropdownItem>
                  Found
                </DropdownItem>
              </Link>
              <Link to='/projects/dutch'>
                <DropdownItem>
                  Dutch
                </DropdownItem>
              </Link>
              <Link to='/projects/events'>
                <DropdownItem>
                  Events
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </ButtonDropdown>

          <Container style={this.style().swipe} className='mt-3 text-center'>
          <p><span className='swiping' role='img' aria-label='swipe'><i>👆</i></span></p><p>Swipe to browse, or use the drop down above.</p>
            <SwipeableRoutes enableMouseEvents>
              <Route
                path='/projects/spacebnb'
                render={props => (
                  <Spacebnb key='spacebnb' updatePage={this.props.updatePage} />
                )}
              />
              <Route path='/projects/jello' render={props => (
                  <Jello key='jello' updatePage={this.props.updatePage} />
                )} />
              <Route path='/projects/found' render={props => (
                  <Found key='found' updatePage={this.props.updatePage} />
                )} />
              <Route path='/projects/dutch' render={props => (
                  <Dutch key='dutch' updatePage={this.props.updatePage} />
                )} />
              <Route path='/projects/events' render={props => (
                  <Events key='events' updatePage={this.props.updatePage} />
                )} />
            </SwipeableRoutes>
          </Container>
        </Container>
      </Router>
    )
  }
}

export default Projects
