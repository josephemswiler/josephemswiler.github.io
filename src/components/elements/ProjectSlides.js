import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
  Row,
  Col
} from 'reactstrap'
import './ProjectSlides.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const items = [
  {
    name: 'Spacebnb',
    src: 'https://i.imgur.com/UtFA1Ev.png',
    link: 'http://space-bnb.now.sh/',
    github: 'https://github.com/Philosec/space-bnb'
  },
  {
    name: 'Found',
    src: 'https://i.imgur.com/rb90vz8.png',
    link: 'http://found-jfe.herokuapp.com/',
    github: 'https://github.com/josephemswiler/found'
  },
  {
    name: 'Jello',
    src: 'https://i.imgur.com/yQSxnOg.jpg',
    link: 'http://jello-jfe.herokuapp.com/',
    github: 'https://github.com/josephemswiler/jello'
  },
  {
    name: 'Dutch',
    src: 'https://i.imgur.com/XWtoysn.png',
    link: 'Modal',
    github: 'Modal'
  },
  {
    name: 'Events',
    src: '',
    link: 'Modal',
    github: 'Modal'
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
      justifyContent: 'center'
    },
    icon: {
      marginLeft: 10,
      fontSize: 32
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
            <h1 className='pt-3' style={this.style().name}>
              {items[activeIndex].name}
              <a href={items[activeIndex].github !== 'Modal' ? items[activeIndex].github : ''} target='_blank'>
                <FontAwesomeIcon
                  style={this.style().icon}
                  icon={['fab', 'github']}
                />
              </a>
              <a href={items[activeIndex].link !== 'Modal' ? items[activeIndex].link : ''} target='_blank'>
                <FontAwesomeIcon
                  style={this.style().icon}
                  icon={['fas', 'external-link-square-alt']}
                />
              </a>
            </h1>
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
