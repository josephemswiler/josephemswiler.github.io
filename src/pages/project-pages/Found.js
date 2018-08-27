import React, { Component } from 'react';

export default class Found extends Component {
  render() {
    return (
      <div className="found">
        { this.props.children }
      </div>
    )
  }
}
