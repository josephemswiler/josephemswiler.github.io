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
import ProjectSlide from './ProjectSlide'
import api from '../utils/api'

export default class Projects extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      projectList: Object.keys(api.projects)
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
      background: 'rgba(255,255,255,0.8)'
    },
    swipe: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      justifyContent: 'center'
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
            className='border-animation inside'
          >
            <DropdownToggle style={this.style().button} className='dropdown-button'>
              <span>Featured Projects</span>
            </DropdownToggle>
            <DropdownMenu
              style={this.style().dropDown}
              className='rounded-bottom'
            >
              {this.state.projectList.map((item, idx) => {
                return (
                  <Link key={idx} to={`/portfolio/projects/${item}`}>
                    <DropdownItem>
                      {item.charAt(0).toUpperCase().concat(item.slice(1))}
                    </DropdownItem>
                  </Link>
                )
              })}
            </DropdownMenu>
          </ButtonDropdown>
          <Container style={this.style().swipe} className='mt-3 text-center'>
            <p>
              <span className='swiping' role='img' aria-label='swipe'>
                <i>👆</i>
              </span>
            </p>
            <p>Swipe to browse, or use the drop down above.</p>
            <SwipeableRoutes
              enableMouseEvents
              className='swipeable-route-wrapper'
            >
              {this.state.projectList.map((item, idx) => {
                return (
                  <Route
                    key={idx}
                    path={`/portfolio/projects/${api.projects[item].name}`}
                    render={props => (
                      <ProjectSlide
                        key={api.projects[item].name}
                        updatePage={this.props.updatePage}
                        project={api.projects[item]}
                      />
                    )}
                  />
                )
              })}
            </SwipeableRoutes>
          </Container>
        </Container>
      </Router>
    )
  }
}
