import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Image = styled.div`
  width: 100%;
  z-index: 90;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 400px;
  padding: 60px 30px;
  margin: none;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
`
const Headers = styled.h2`
  color: white;
  background: #2185d0;
  padding: 20px 0;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  font-size: 22px;
`

const StepsSection = props => (
  <Image
    style={{ backgroundImage: 'url(' + require('./background2.jpg') + ')' }}
  >
    {props.filler}
  </Image>
)

export default StepsSection
