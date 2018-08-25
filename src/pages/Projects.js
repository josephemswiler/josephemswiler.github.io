import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Projects extends Component {

  componentDidMount() {
    this.props.updatePage('Projects')
  }

  render() {
    return (
      <Router>
      <div className="projects">
      Projects
      
      </div>
      </Router>
    )
  }
}
