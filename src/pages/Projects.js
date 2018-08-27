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
      padding: 0,
    },
    buttonDropDown: {
      marginTop: 85
    },
    project: {
      height: '100%',
      width: '100%',
    },
    button: {
      width: '200px',
      borderRadius: '1.5px',
      // zIndex: 1001
    },
    dropDown: {
      width: '200px',
      background: 'rgba(255,255,255,0.8)',
      borderRadius: 0
    }
  })

  render () {
    return (
      <Router>
        <Container style={this.style().container}>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={this.style().buttonDropDown}>
            <DropdownToggle style={this.style().button}>
              Featured Projects
            </DropdownToggle>
            <DropdownMenu style={this.style().dropDown} className='rounded-bottom'>
              <Link className='link' to='/projects/spacebnb'>
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

          <SwipeableRoutes>
            <Route
              path='/projects/spacebnb'
              render={props => (
                <Spacebnb key='spacebnb' updatePage={this.props.updatePage} />
              )}
            />
            <Route path='/projects/jello' component={BlueView} />
            <Route path='/projects/found' component={GreenView} />
            <Route path='/projects/dutch' component={YellowView} />
            <Route path='/projects/events' component={GreenView} />
          </SwipeableRoutes>
        </Container>
      </Router>
    )
  }
}

export default Projects
