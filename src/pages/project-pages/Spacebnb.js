import React, { Component } from 'react';

export default class Spacebnb extends Component {

  style = () => ({
    container: {
      background: 'orange'
    }
  })

  render() {
    return (
      <div style={this.style().container}>
        Spacebnb
      </div>
    )
  }
}
