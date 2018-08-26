import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import api from '../utils/api'
import Drawer from '../components/elements/Drawer'
import './About.css'

export default class About extends Component {
  componentDidMount () {
    this.props.updatePage('About')
    // this.colorInterval()
  }

  // colorInterval = () => {
  // let bg =  this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))]
  //   this.interval = setInterval(() => {
  //     if (this.state.idx >= this.state.projects.length - 1) {
  //       this.setState({ idx: 0 })
  //     } else {
  //       this.setState({ idx: this.state.idx + 1 })
  //     }
  //     this.props.updateBackground(this.state.projects[this.state.idx].name)
  //   }, 3500)
  // }

  style = () => ({
    container: {
      margin: 0,
      padding: 20,
      paddingTop: 85,
      maxWidth: '100%',
      height: '100%'
    },
    hello: {
      background: '#333',
      color: '#fff'
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
      paddingBottom: '5rem'
    },
    listCard: {
      background: '#f7f1e3'
    }
  })

  colors = [
    'rgba(51,217,178,0.5)',
    'rgba(52,172,224,0.5)',
    'rgba(255,218,121,0.5)',
    'rgba(255,82,82,0.5)'
  ]

  quickFacts = [
    {
      title: 'Favorite Hobbies',
      listItems: [
        'Running',
        'Cooking 👨‍🍳',
        'WebVR',
        'More developing 👨‍💻',
        'More designing'
      ]
    },
    {
      title: 'Favorite Restaurants',
      listItems: [
        'Sway 🇹🇭',
        'Terry Black’s BBQ',
        'Torchy’s Tacos 🌮',
        'Pacha Organic Café',
        'Pinthouse Pizza',
        'Ramen Tatsu-Ya'
      ]
    },
    {
      title: 'Favorite Hikes',
      listItems: [
        'Shenandoah National Park',
        'Multnomah Falls',
        'Burlington Waterfront 🌲',
        'Piazzale Michelangelo',
        'Park Güell 🇪🇸'
      ]
    },
    {
      title: 'Favorite Breweries',
      listItems: [
        'Pinthouse Pizza 🙃',
        'Jester King',
        'St. Elmo',
        'Oddwood 🤷',
        'Zilker',
        'Lazarus'
      ]
    },
    {
      title: 'Favorite Hot Sauce',
      listItems: [
        'Yellowbird Habanero',
        'Tacodeli Salsa Doña 💃🏻',
        `Perry's Pepper Sauce`
      ]
    },
    {
      title: 'Currently Listening',
      listItems: [
        'Arctic Monkeys 🐵',
        'Foals 🦄',
        'BØRNS',
        'Digitalism 🤖',
        'Dwight Yoakham',
        'Chance the Rapper'
      ]
    },
    {
      title: 'Most Used Gif',
      listItems: [
        {
        src: 'https://media.giphy.com/media/vMnuZGHJfFSTe/giphy.gif'
        }
      ],
    },
    {
      title: 'Favorite Movies',
      listItems: [
        'Hot Fuzz 🕵',
        'The Man Who Knew Too Little',
        'The Room',
        'James Bond 🤵',
        'Indiana Jones'
      ]
    },
    {
      title: 'Favorite Museums',
      listItems: [
        'National Air and Space Museum 🚀',
        'The Blanton Museum of Art',
        'J. Paul Getty Museum',
        'National Gallery of Art 👩‍🎨',
        'Uffizi Gallery',
        'Louvre Museum 🇫🇷'
      ]
    },
    {
      title: 'Currently Reading',
      listItems: [
        'Ego Is The Enemy',
        'Lonely Planet Italian Phrasebook 🇮🇹',
        'Eloquent JavaScript'
      ]
    },
    {
      title: 'Favorite Dinosaur',
      listItems: [
        'Stegosaurus'
      ]
    },
    {
      title: 'Favorite Tacos',
      listItems: [
        'Al Pastor',
        'Migas',
        'Carne Asada Con Crema'
      ]
    }
  ]

  render () {
    return (
      <Container style={this.style().container}>
        <div className='card-columns' style={this.style().clearFooter}>
          <div className='card mb-3' style={this.style().hello}>
            <div className='card-body'>
              <h1 style={this.style().header}>Hello. 👋</h1>
              <div className='text-justify'>
                I'm a full stack developer from
                {' '}
                <span style={{ fontWeight: 900 }}>Austin, TX</span>
                {' '}
                with a proficiency in UI / UX and the skills listed below. You can find me on most platforms
                {' '}
                <span style={{ fontWeight: 900 }}>@josephemswiler</span>
                . Here are some quick facts about me!
                {' '}
                <div className='arrow-move'>→</div>
              </div>
              <p className='card-text mt-3'>
                <small style={{ color: '#aaa' }}>
                  Last updated August 2018
                </small>
              </p>
            </div>
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
          {this.quickFacts.map( (item, idx) => {
            return (
              <div key={idx} style={this.style().listCard} className='card mb-3'>
                <div className='card-body'>
                  <h3 style={this.style().header}>{item.title}</h3>
                  <ul style={this.style().list}>
                    {item.listItems.map( (listItem, listIdx, listArr) => {
                      console.log(typeof listItem[0])
                      if (typeof listItem[0] === 'string') {
                        return <li key={listIdx}><h5>{listItem}</h5></li>
                      } else {
                        return <li key={listIdx}><img className='list-image' src={listItem.src} alt={`image ${listIdx}`} /></li>
                      }
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    )
  }
}
