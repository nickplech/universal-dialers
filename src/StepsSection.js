import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Image = styled.div`
  width: 100%;
  z-index: 90;
  display: flex;
  justify-content: flex-start;
  align-items: center;

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
  background: rgba(100, 100, 220, 1);
  padding: 20px 0;
  text-align: center;
  font-family: 'Kanit', sans-serif;
  font-size: 22px;
`

const Card = styled.div`
  min-width: 300px;
  margin: 25px 0;
  border-radius: 3px;
  background: rgba(250, 250, 250, 1);
  box-shadow: -4px -4px 6px 5px rgba(0, 0, 0, 0.2);
  transform: scale(0.9);
  margin-left: 15%;
  @media (max-width: 768px) {
    margin: 25px auto;
  }

  /* .icon {
    justify-self: center;
  } */
`
const List = styled.ul`
  list-style: none;
  display: flex;

  flex-flow: column;
  padding: 20px 20px 0 20px;
  background: white;

  .words {
    width: 100%;
    color: rgba(100, 100, 220, 1);
    justify-content: center;
    padding-left: 10px;
    font-size: 20px;
    font-family: 'Kanit', sans-serif;
  }
  .lis {
    padding-bottom: 35px;
    align-items: center;
    flex-flow: row;
    display: inline-flex;
  }
`

const StepsSection = props => (
  <Image
    style={{ backgroundImage: 'url(' + require('./background2.jpg') + ')' }}
  >
    <Card>
      <Headers>Click Below to Learn More</Headers>
      <List>
        <li className="lis">
          <Icon
            name="phone"
            circular
            inverted
            size="large"
            color="orange"
            className="icon"
          />{' '}
          <Link to="/services/ringless">
            <h2 className="words">Ringless Voicemail</h2>
          </Link>
        </li>
        <li className="lis">
          <Icon
            name="cloud upload"
            circular
            inverted
            size="large"
            color="orange"
            className="icon"
          />
          <Link to="/services/dialer">
            <h2 className="words">Cloud Predictive Dialer</h2>
          </Link>
        </li>
        <li className="lis">
          <Icon
            name="microphone"
            circular
            inverted
            size="large"
            color="orange"
            className="icon"
          />
          <Link to="/services/voicebroadcast">
            <h2 className="words">Voice Broadcasting</h2>
          </Link>
        </li>
        <li className="lis">
          <Icon
            name="chat"
            circular
            inverted
            size="large"
            color="orange"
            className="icon"
          />{' '}
          <Link to="/services/sms">
            <h2 className="words">SMS Messaging</h2>
          </Link>
        </li>
      </List>
    </Card>
  </Image>
)

export default StepsSection
