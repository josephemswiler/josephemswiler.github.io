import React, { Component } from 'react'

export default class Overlay extends Component {

  handleClick = () => {
    
  }

  styles = () => ({
    overlay: {
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)`,
      opacity: this.props.toggleOverlay ? 0.5 : 0,
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      transition: 'all 2s ease'
    }
  })

  render () {
    return (
      <div style={this.styles().overlay} onClick={this.handleClick} />
    )
  }
}