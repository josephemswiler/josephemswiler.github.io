import React, { Component } from 'react';

export default class Jello extends Component {
  render() {
    return (
      <div className="jello">
        { this.props.children }
      </div>
    )
  }
}
