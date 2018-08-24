import React, { Component } from 'react'
import Top from './components/containers/Top'

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
      <div>
        <Top />
        <div style={this.style().app}>
        </div>
      </div>
    )
  }
}

export default App
