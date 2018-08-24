import React, { Component } from 'react';

export default class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        { this.props.children }
      </div>
    )
  }
}
