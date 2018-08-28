import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import Projects from '../../pages/Projects'
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
      <Card style={this.style().card}>
        <CardBody style={this.style().body}>
          <CardTitle style={this.style().title}>
            Full Stack Web & Mobile Developer
          </CardTitle>
          <Link to='/portfolio/projects' style={this.style().link}>
            <Button
              block
              style={this.style().button}
              className='button-text'
              onClick={() => this.props.updatePage('Projects')}
            >
              Web & Mobile Applications →
            </Button>
          </Link>
        </CardBody>

        <Route
          exact
          path='/portfolio/projects'
          render={props => <Projects updatePage={this.props.updatePage} />}
        />
      </Card>
    )
  }
}
