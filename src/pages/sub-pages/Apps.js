import React, { Component } from 'react'

export default class Apps extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <div className='apps'>
        Apps
      </div>
    )
  }
}
