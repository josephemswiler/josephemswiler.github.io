import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import api from '../utils/api'
import Drawer from '../components/elements/Drawer'
import './About.css'

export default class About extends Component {
  componentDidMount () {
    this.props.updatePage('About')
  }

  style = () => ({
    container: {
      margin: 0,
      padding: 20,
      paddingTop: 80,
      maxWidth: '100%',
      height: '100%'
    },
    hello: {
      background: '#333',
      color: '#fff',

    },
    intro: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      textAlign: 'justify',
      paddingLeft: 42,
      paddingRight: 42
    },
    header: {
      fontWeight: 900
    },
    justify: {
      textAlign: 'justify'
    },
    list: {},
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 0
    },
    iconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 80,
      height: 100,
      alignItems: 'center'
    },
    icon: {
      height: 50,
      width: 50,
      margin: 3,
      textAlign: 'center'
    },
    iconLabel: {
      textAlign: 'center'
    },
    clearFooter: {
      paddingBottom: '5rem',
    }
  })

  colors = [
    '#33d9b2',
    '#34ace0',
    '#ffda79',
    '#ff5252',
    '#f7f1e3'
  ]

  quickFacts = [
      {
        title: 'Favorite Hobbies',
        listItems: [
          'Running 🏃',
          'Cooking',
          'WebVR',
          'More developing',
          'More designing '
        ]
      },
      {
        title: 'Favorite Restaurants',
        listItems: [
          'Sway',
          'Terry Black’s BBQ',
          'Torchy’s Tacos',
          'Pacha Organic Café',
          'Pinthouse Pizza',
          'Ramen Tatsu-Ya'
        ]
      },
      {
        title: 'Favorite Breweries',
        listItems: [
          'Pinthouse Pizza (South) 🙃',
          'Jester King',
          'St. Elmo',
          'Oddwood',
          'Zilker'
        ]
      },
      {
        title: 'Currently Listening',
        listItems: [
          'Arctic Monkeys',
          'Foals',
          'BØRNS',
          'Dwight Yoakham',
          'Digitalism',
          'Chance the Rapper'
        ]
      }
    ]

  render () {
    return (
      <Container style={this.style().container}>
        <Row>
          <Col sm='6'>
            <div className='card mb-3' style={this.style().hello}>
              <div className='card-body'>
                <h1 style={this.style().header}>Hello.</h1>
                <p className='text-justify'>
                  I'm a full stack developer with a proficiency in UI / UX, jQuery, and advanced front-end Javascript (React.js, Next.js, Three.js). I have experience with NoSQL and SQL databases and development and consumption of RESTful APIs. Here are some quick facts about me. : )
                </p>
                <p className='card-text'>
                  <small>Last updated August 2018</small>
                </p>
              </div>
            </div>
            <div className='card mb-0'>
              <div style={this.style().wrapper}>
                {api.skills.map((item, idx) => {
                  return (
                    <div style={this.style().iconWrapper} key={idx}>
                      <a href={item.link} target='_blank'>
                        <img
                          style={this.style().icon}
                          src={item.image}
                          alt='a technology icon'
                        />
                      </a>
                      <span style={this.style().iconLabel}>
                        {item.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Col>
          <Col sm='6'>
            <div class="card-columns" style={this.style().clearFooter}>
              {this.quickFacts.map(item => {
                let bg =  this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))]
                return (
                  <div style={{background: bg}} className='card mb-3'>
                    <div className='card-body'>
                      <h3 style={this.style().header}>{item.title}</h3>
                      <ul style={this.style().list}>
                      {item.listItems.map( listItem => {
                        return (
                          <li><h2>{listItem}</h2></li>    
                        )
                      })}
                      </ul>
                    </div>
                  </div>
                )
              })}
              </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
