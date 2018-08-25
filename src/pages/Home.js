import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Card from '../components/elements/Card'
import './Home.css'

export default class Home extends Component {

  componentDidMount() {
    this.props.updatePage('Home')
  }
  
  style = () => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    }
  })

  render () {
    return (
      <Container style={this.style().container} fluid>
        <Card />
        <div className='star-wrapper' />
        <div className='star-wrapper live-stars'>
          <div className='star-field-one' />
          <div className='star-field-two' />
          <div className='star-field-three' />
        </div>
        {/* <a href='#1' />
        <a href='#2' className='parallax'>
          <div id='stars1' />
          <div id='stars2' />
          <div id='stars3' />
        </a> */}
      </Container>
    )
  }
}
