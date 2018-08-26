import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import api from '../utils/api'
import Drawer from '../components/elements/Drawer'

export default class About extends Component {

  componentDidMount() {
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
    intro: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      textAlign: 'justify',
      paddingLeft: 38,
      paddingRight: 38
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: 0,
      paddingBottom: '5rem',
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
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
      <Row>
      <Col sm='12' md='6' style={this.style().intro}>
        <h1>Hello.</h1>
        <p>I'm a full stack developer with a proficiency in UI / UX, jQuery, and advanced front-end Javascript (React.js, Next.js, Three.js). I have experience with NoSQL and SQL databases and development and consumption of RESTful APIs. Here are some quick facts about me. : )</p>
        </Col>
        <Col sm='12' md='6' style={this.style().wrapper}>
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
        </Col>
      </Row>
    </Container>
    )
  }
}
