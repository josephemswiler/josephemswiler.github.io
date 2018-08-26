import React, { Component } from 'react'
import Top from './components/containers/Top'
import Overlay from './pages/Overlay'
import Bottom from './components/containers/Bottom'

class App extends Component {
  constructor (props) {
    super (props) 

    this.state = {
      backgroundLight: null,
      page: null,
      toggleOverlay: false
    }
  }

  updatePage = page => {
    let pageLight = false
    switch (page) {
      case 'Home':
      case 'Projects':
      break
      case 'About':
      pageLight = true
      break
      default:
    }
    this.setState({
      backgroundLight: pageLight,
      page: page
    })
  }

  toggleOverlay = () => {
    this.setState({
      toggleOverlay: !this.state.toggleOverlay
    })
  }

  style = () => ({
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      background: this.state.page === 'Home' ? 'transparent' : this.state.backgroundLight ? '#fff' : '#333',
      color: this.state.backgroundLight ? '#333' : '#fff',
      transition: 'all 1s ease'
    }
  })
  render () {
    return (
      <div style={this.style().app}>
        <Top backgroundLight={this.state.backgroundLight} page={this.state.page} updatePage={this.updatePage} toggleOverlay={this.toggleOverlay} />
        <Overlay toggleOverlay={this.state.toggleOverlay} />
        <Bottom backgroundLight={this.state.backgroundLight} page={this.state.page} />
      </div>
    )
  }
}

export default App
