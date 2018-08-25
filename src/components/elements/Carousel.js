import React, { Component } from 'react'

export default class Carousel extends Component {
  render () {
    return (
      <div id="slider" className="slider">
      <div className="wrapper">
        <div id="items" className="items">
          <span className="slide">Slide 1</span>
          <span className="slide">Slide 2</span>
          <span className="slide">Slide 3</span>
          <span className="slide">Slide 4</span>
          <span className="slide">Slide 5</span>
        </div>
      </div>
      <a id="prev" className="control prev"></a>
      <a id="next" className="control next"></a>
    </div>
    )
  }
}
