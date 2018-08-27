import React, { Component } from 'react';

export default class Events extends Component {
  render() {
    return (
      <div className="events">
        { this.props.children }
      </div>
    )
  }
}
