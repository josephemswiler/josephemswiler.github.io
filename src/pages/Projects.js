import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Apps from '../pages/sub-pages/Apps'
import Carousel from '../components/elements/Carousel'

export default class Projects extends Component {
  componentDidMount () {
    this.props.updatePage('Projects')
  }

  render () {
    return (
      <div className='projects'>
        <Carousel />
        <Router>
          <Route path='/apps' component={Apps} />
        </Router>
      </div>
    )
  }
}
