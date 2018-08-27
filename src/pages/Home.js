import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Card from '../components/elements/Card'
import './Home.css'

export default class Home extends Component {
  componentDidMount () {
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
      padding: 0,
      background: 'transparent'
    }
  })

  render () {
    return (
      <Container style={this.style().container} fluid>
        <Card updatePage={this.props.updatePage} />
        <div className='star-wrapper' />
        <div className='star-wrapper live-stars'>
          <div className='star-field-one' />
          <div className='star-field-two' />
          <div className='star-field-three' />
        </div>
      </Container>
    )
  }
}
