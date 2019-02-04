import React, { Component } from 'react'
import styled from 'styled-components'

import Media from 'react-media'
import Particles from 'react-particles-js'
import { Grid, Header, Container, Segment } from 'semantic-ui-react'
import phones from './phones.jpg'
import Questions from './Questions'
import Footer from './Footer'

const Container2 = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
    url(${phones});
  background-size: cover;

  width: 100%;
  height: 350px;
  display: block;
  overflow: hidden;
  @media (min-width: 1500px) {
    height: 450px;
  }
`

const Title = styled.h1`
  position: absolute;
  top: 100px;
  font-size: 48px;
  margin-left: 35px;
  color: white;
  font-family: 'Racing Sans One', cursive;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-left: 15px;
  }
`
const SubTitle = styled.h2`
  position: absolute;
  top: 140px;
  width: 390px;
  font-weight: 200;
  left: 40px;
  color: white;
  font-family: 'Kanit', sans-serif;
  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 300px;
    left: 15px;
    top: 120px;
  }
`
const Services = props => (
  <div>
    <Container2 phones>
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
      <Media query="(max-width: 868px)">
        {matches =>
          matches ? null : (
            <Particles
              style={{
                width: '100%',
                top: '100px',
                height: '100%',
                zIndex: '1',
                opacity: '.5',
                backgroundImage: 'url("")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              params={{
                particles: {
                  number: {
                    value: 80,
                  },
                  size: {
                    value: 3,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse',
                    },
                  },
                },
              }}
            />
          )
        }
      </Media>
    </Container2>
    <Segment
      vertical
      style={{
        padding: '8em 0em',
        backgroundColor: '#73c5ff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(27,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%234912ff'/%3E%3Cstop offset='1' stop-color='%233898ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='22' height='22' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%2373c5ff' cx='11' cy='11' r='11'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        minHeight: '700px',
      }}
    >
      <Container text>
        <Grid stackable verticalAlign="middle">
          <Grid.Row>
            <Header as="h3" style={{ fontSize: '1.6em', color: 'white' }}>
              {props.textTitle1}
            </Header>{' '}
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              {props.textChunk1}
            </p>
            <Header
              as="h3"
              style={{
                fontSize: '1.6em',
                color: 'white',
                marginTop: '75px',
              }}
            >
              {props.textTitle2}
            </Header>{' '}
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              {props.textChunk2}
            </p>
            <Header
              as="h3"
              style={{
                fontSize: '1.6em',
                color: 'white',
                marginTop: '75px',
              }}
            >
              {props.textTitle3}
            </Header>{' '}
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              {props.textChunk3}
            </p>
            <Header
              as="h3"
              style={{
                fontSize: '1.6em',
                color: 'white',
                marginTop: '75px',
              }}
            >
              {props.textTitle4}
            </Header>{' '}
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              {props.textChunk4}
            </p>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Questions />
    <Footer />
  </div>
)

export default Services
