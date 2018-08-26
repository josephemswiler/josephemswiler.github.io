import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col
} from 'reactstrap'
import './ProjectSlides.css'
import { relative } from 'path'



const items = [
  {
    src: 'https://i.imgur.com/rb90vz8.png',
    altText: 'An app',
    caption: 'Found',
    name: 'Found'
  },
  {
    src: 'https://i.imgur.com/UtFA1Ev.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    name: 'Spacebnb'
  },
  {
    src: 'https://i.imgur.com/yQSxnOg.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    name: 'Jello'
  },
  {
    src: 'https://i.imgur.com/XWtoysn.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    name: 'Dutch'
  }
]

class ProjectSlides extends Component {
  constructor (props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1
      ? 0
      : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0
      ? items.length - 1
      : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  style = () => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    },
    name: {
      fontWeight: 900
    },
    column: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  render () {
    const { activeIndex } = this.state

    return (
      <Container style={this.style().container} fluid>
        <Row>
          <Col>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {items.map(item => {
                return (
                  <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.name}
                  >
                    <img
                      className='slide-img'
                      src={item.src}
                      alt={item.altText}
                      onClick={() => console.log(item.name)}
                    />
                  </CarouselItem>
                )
              })}
           <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={this.next}
              />
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
          <h1 className='pt-3' style={this.style().name}>{items[activeIndex].name}</h1>
          </Col>
          </Row>
        <Row> 
          <Col className='p-3' style={this.style().column}>
          
      
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProjectSlides
