import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Apps from '../../pages/sub-pages/Apps'
import UIUX from '../../pages/sub-pages/UIUX'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import './Card.css'

export default class HomeCard extends Component {
  style = () => ({
    card: {
      maxWidth: 500,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      color: '#fff'
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontWeight: 900,
      fontSize: 60,
      width: 291,
      textAlign: 'justify',
      marginBottom: 0
    },
    link: {
      width: '100%',
      textDecoration: 'none'
    },
    button: {
      marginTop: '1.25rem',
      padding: 15,
      borderRadius: 1.5
    }
  })
  render () {
    return (
      <Router>
        <Card style={this.style().card}>
          <CardBody style={this.style().body}>
            <CardTitle style={this.style().title}>
              Full Stack Web & Mobile Developer
            </CardTitle>
            <Link to='/projects/apps' style={this.style().link}>
              <Button block style={this.style().button} className='button-text'>
                Web & Mobile Applications →
              </Button>
            </Link>
            <Link to='/projects/ui-ux' style={this.style().link}>
              <Button block style={this.style().button} className='button-text'>
                ← UI / UX Explorations
              </Button>
            </Link>
          </CardBody>
     

        </Card>

      </Router>
    )
  }
}
