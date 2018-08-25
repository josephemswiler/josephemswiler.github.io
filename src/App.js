import React, { Component } from 'react'
import Top from './components/containers/Top'
import Bottom from './components/containers/Bottom'

class App extends Component {
  constructor (props) {
    super (props) 

    this.state = {
      backgroundLight: false
    }
  }

  updatePage = page => {
    console.log(page)
    let pageLight = false
    switch (page) {
      case 'Home':
      case 'About':
      break
      case 'Projects':
      case 'Skills':
      pageLight = true
      break
      default:
    }
    this.setState({
      backgroundLight: pageLight
    })
  }

  style = () => ({
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      transition: 'all 1s ease'
    }
  })
  render () {
    return (
      <div style={this.style().app}>
        <Top backgroundLight={this.state.backgroundLight} updatePage={this.updatePage} />
        <Bottom backgroundLight={this.state.backgroundLight} />
      </div>
    )
  }
}

export default App
