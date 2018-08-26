import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Apps from '../pages/sub-pages/Apps'
import ProjectSlides from '../components/elements/ProjectSlides'

export default class Projects extends Component {
  componentDidMount () {
    this.props.updatePage('Projects')
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
    }
  })

  render () {
    return (
      <Container style={this.style().container} fluid>
        <ProjectSlides />
        <Router>
          <Route path='/apps' component={Apps} />
        </Router>
      </Container>
    )
  }
}
