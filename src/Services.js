import React, { Component } from 'react'
import styled from 'styled-components'
import Zoom from '@material-ui/core/Zoom'
import Particles from 'react-particles-js'
import {
  Button,
  Grid,
  Header,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
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
    </Container2>
    <Segment
      vertical
      style={{
        padding: '8em 0em',
        background:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSJyZ2JhKDEwMCwxMDAsMjIwLDEpIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTMwLDIyMCwuNCkiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8cGF0aCBkPSJNMjggMEwyOCAzNEwwIDUwTDAgODRMMjggMTAwTDU2IDg0TDU2IDUwTDI4IDM0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAwLDEzMCwyMDAsLjQpIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPC9zdmc+")',
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
