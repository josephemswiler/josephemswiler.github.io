import React, { Component } from 'react';

export default class About extends Component {
  
  componentDidMount() {
    this.props.updatePage('About')
  }

  render() {
    return (
      <div className="about">
      About
      </div>
    )
  }
}
