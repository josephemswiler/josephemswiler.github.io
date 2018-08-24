import React, { Component } from 'react'
import Top from './components/containers/Top'
import Bottom from './components/containers/Bottom'

class App extends Component {
  style = () => ({
    app: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw'
    }
  })
  render () {
    return (
      <div style={this.style().app}>
        <Top />
        <Bottom />
      </div>
    )
  }
}

export default App
