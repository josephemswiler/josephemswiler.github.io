import React, { Component } from 'react'
import { Container } from 'reactstrap'
import api from '../utils/api'
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
      background: this.colors[Math.floor(Math.random() * Math.floor(this.colors.length))],
      transition: 'all 2s ease'
    }
  })

  colors = [
    'rgba(51,217,178,0.5)',
    'rgba(52,172,224,0.5)',
    'rgba(255,218,121,0.5)',
    'rgba(255,82,82,0.5)'
  ]

  render () {
    return (
      <Container style={this.style().container}>
        <div className='card-columns' style={this.style().clearFooter}>
          <div className='card mb-3' style={this.style().hello}>
            <div className='card-body'>
              <h1 style={this.style().header}>Hello. <span role='img' aria-label='wave'>👋</span></h1>
              <div className='text-justify'>
                I'm a full stack developer from
                {' '}
                <span style={{ fontWeight: 900 }}>Austin, TX</span>
                {' '}
                with a proficiency in UI / UX and the skills listed alphabetically below. You can find me on most platforms
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
          {api.quickFacts.map( (item, idx) => {
            return (
              <div key={idx} style={this.style().listCard} className='card mb-3'>
                <div className='card-body'>
                  <h3 style={this.style().header}>{item.title}</h3>
                  <ul style={this.style().list}>
                    {item.listItems.map( (listItem, listIdx, listArr) => {
                      if (typeof listItem[0] === 'string') {
                        return <li key={listIdx}><h5>{listItem}</h5></li>
                      } else {
                        return <li key={listIdx}><img className='list-image' src={listItem.src} alt={`${listIdx} quick facts`} /></li>
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
