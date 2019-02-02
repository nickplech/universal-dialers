import React, { Component } from 'react'
import styled from 'styled-components'
import phones from './phones.jpg'
import Questions from './Questions'
import Footer from './Footer'

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 35vw 65vw;
  overflow: hidden;

  .headers {
    display: block;
    position: absolute;
    margin-top: 70px;
    margin-left: 10%;
    @media (max-width: 768px) {
    }
  }
`
const Img = styled.img`
  display: grid;
  grid-column: 1/2;
  height: 550px;
  width: auto;
`
const SubBlock = styled.div`
  width: 100%;
  height: 300px;
  background: black;
  display: grid;
  grid-template-columns: 60vw 40vw;
  grid-template-rows: 100px 400px;
`
const LowerBlock = styled.div`
  width: 100%;
  height: 680px;
  background: white;
  display: grid;
  grid-template-columns: 60vw 40vw;
  grid-template-rows: 100px 400px;
`

const DATA = [
  {
    title: 'Cloud Predictive Dialer',
    key: '0',
  },
  {
    title: 'Ringless Voicemail',
    key: '1',
  },
  {
    title: 'Cloud Predictive Dialer',
    key: '2',
  },
]
class Services extends Component {
  render() {
    // const { DATA } = this.props
    return (
      <div>
        <Container>
          <h1 className="headers">{DATA.title}</h1>
          <Img src={phones} alt="phones" />
        </Container>
        <SubBlock>
          <p>hi</p>
        </SubBlock>
        <LowerBlock>
          <p>hi</p>
        </LowerBlock>
        <Questions />
        <Footer />
      </div>
    )
  }
}

export default Services
