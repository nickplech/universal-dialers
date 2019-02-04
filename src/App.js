import React from 'react'
import Particles from 'react-particles-js'
import FormDialog from './PopForm'
import Zoom from '@material-ui/core/Zoom'
import StepsSection from './StepsSection'
import styled from 'styled-components'
import logo from './logoo.png'
import mockup from './Mockup.jpg'
import DotsMobileStepper from './StepperNew'
import Pulse from './Pulse'
import mainPhone from './logophone.png'

import vm from './vm.png'
import Footer from './Footer'
import {
  Button,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

const Img = styled.img`
  height: 70px;
  padding: 20px;
  background: white;
  border-radius: 50%;
  width: auto;
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1200px) {
    .media {
      background-position: center center;
    }
  }
`
const Butt = styled.div`
  position: relative;
  z-index: 90;
  .button {
    padding: 10px 15px;
    font-weight: 800;
    /* display: flex; */
    font-size: 18px;
    border: 2px solid;
    margin-top: 30px;
    background: rgba(30, 100, 210, 1);
    width: 270px;
    color: white;

    cursor: pointer;
    &:hover {
      background: rgba(240, 240, 240, 0.7);
      border: 2px solid;
    }
  }
  .arrow {
    padding-left: 10px;
    margin-bottom: 12px;
  }
`
const OutSpan = styled.span``
const LogoSmaller = styled.img`
  width: 560px;
  height: auto;
  margin-top: 100px;

  @media (max-width: 768px) {
    width: 320px;
    height: auto;
    margin-top: 0px;
  }
`
const HomepageHeading = ({ mobile }) => (
  <Container textAlign="center">
    <Zoom in style={{ transitionDelay: '500ms' }}>
      <LogoSmaller src={logo} alt="logo" />
    </Zoom>
    <Header
      as="h1"
      content={'Voice Broadcasting | Cloud Predictive Dialer | SMS'}
      inverted
      style={{
        position: 'relative',
        top: '25px',
        textTransform: 'uppercase',
        fontSize: mobile ? '1em' : '1.5em',
        textAlign: 'center',
        fontWeight: '900',
        marginTop: '0',
        marginBottom: '0',
      }}
    />
    <p
      style={{
        position: 'relative',
        top: '20px',
        textTransform: 'uppercase',
        fontSize: mobile ? '1em' : '2.5em',
        textAlign: 'center',
        fontWeight: '900',
        marginTop: '0',
        marginBottom: '0',
      }}
    >
      <OutSpan className="element" style={{ color: '#206fe6' }}>
        &amp;
      </OutSpan>{' '}
      Ringless Voicemail Drops
    </p>

    <Butt>
      <FormDialog
        buttonTitle="Lets Get Started"
        icon={<Icon className="arrow" name="right arrow" />}
      />
    </Butt>
  </Container>
)

const MockUpScreen = styled.img`
  width: 500px;
  height: auto;
  @media (max-width: 702px) {
    max-width: 300px;
    height: auto;
  }
`

const Phone = styled.img`
  width: auto
  height: 600px;
  @media (max-width: 662px) {
    display: flex;
    justify-self: center;
  }
`

const VoiceMail = styled.div`
  position: absolute;
  box-shadow: -4px 4px 8px 3px rgba(0, 0, 0, 0.2);
  top: 130px;
  display: flex;
  flex-flow: column;
  background: #e0e0e0;
  border-radius: 10px;
  min-height: 120px;
  width: 320px;
  opacity: 1;
  .top {
    background: #eeefef;
    width: 100%;
    flex-flow: row;
    align-items: center;

    display: inline-flex;
    height: 40px;
    border-radius: 10px 10px 0 0;
    opacity: 1;
  }

  .bottom {
    flex-flow: column;
    padding-left: 15px;
    padding-top: 10px;
  }
  .flex-start {
    justify-content: flex-start;
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .flex-end {
    position: absolute;

    right: 10px;
  }
`

const HomepageLayout = ({ props }) => (
  <>
    <Hero>
      <Segment
        inverted
        textAlign="left"
        vertical
        style={{
          minHeight: 60,
          padding: '8em 0em',
          backgroundImage: 'url(' + require('./background2.jpg') + ')',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          height: '650px',
          backgroundPosition: 'center top',
          width: '100%',
        }}
        className="media"
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={16}>
              <HomepageHeading />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Particles
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            zIndex: '1',
            opacity: '.5',
            backgroundImage: 'url("")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          params={{
            particles: {
              number: {
                value: 50,
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
      </Segment>
    </Hero>
    <Segment
      vertical
      style={{
        padding: '8em 0em',
        backgroundColor: '#2b7cff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%232e74ee' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23316cdd' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%233564cc' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23385cbb' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%233b54aa' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: 'cover',

        minHeight: '700px',
      }}
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            {' '}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Pulse
                item={
                  <VoiceMail>
                    <div className="top">
                      <img src={vm} alt="text logo" className="flex-start" />
                      <p style={{ marginTop: '15px' }}>NEW VOICEMAIL</p>
                      <p className="flex-end">now</p>
                    </div>

                    <div className="bottom">
                      <p style={{ marginBottom: '4px' }}>Universal Dialers</p>
                      <p>You have 1 unread voicemail.</p>
                    </div>
                  </VoiceMail>
                }
              />

              <Phone src={mainPhone} alt="voicemail drops" />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em', color: 'white' }}>
              Powerful, Modern &amp; Highly Effective Marketing Tools
            </Header>{' '}
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              Deliver pre-recorded messages to your contact list, reaching
              thousands of people in a matter of hours rather than days. Our
              technology saves you money by eliminating the need to have a live
              customer service representative manually call each client.
            </p>
            <Header
              as="h3"
              style={{ fontSize: '2em', color: 'white', marginTop: '75px' }}
            >
              We're Here to Help You Save Time and Grow Your Business
            </Header>{' '}
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              Stop wasting time and let us do the heavy lifting for you, so you
              can focus on getting the perfect message out to your audience.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <StepsSection filler={<DotsMobileStepper />} />
    <Segment style={{ padding: '0em' }} vertical>
      <Grid
        style={{ padding: '0em', textAlign: 'center' }}
        celled="internally"
        columns="equal"
        stackable
      >
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: '5em',
              paddingTop: '5em',
              alignSelf: 'center',
            }}
          >
            <MockUpScreen src={mockup} alt="phones" />
          </Grid.Column>
          <Grid.Column
            style={{
              paddingBottom: '5em',
              paddingTop: '5em',
              alignSelf: 'center',
            }}
          >
            <Icon
              name="cog"
              circular
              size="large"
              color="blue"
              inverted
              className="icon"
            />
            <Header as="h3" style={{ fontSize: '1.6em' }}>
              "No Hardware Required"
            </Header>
            <p style={{ fontSize: '1.33em', padding: '0 10%' }}>
              Our software is 100% cloud based, which means no expensive
              hardware is required. All you need is a browser with an internet
              connection.
            </p>
            <Icon
              name="user circle outline"
              circular
              inverted
              size="large"
              color="blue"
              className="icon"
            />
            <Header as="h3" style={{ fontSize: '1.6em' }}>
              "User Friendly Interface"
            </Header>
            <p style={{ fontSize: '1.33em', padding: '0 10%' }}>
              Our interface was designed with our users in mind, giving you the
              ability to start broadcasting in minutes!
            </p>
            <Icon
              name="numbered list"
              circular
              inverted
              size="large"
              color="blue"
              className="icon"
            />
            <Header as="h3" style={{ fontSize: '1.6em' }}>
              "Start Sending in 3 Easy Steps"
            </Header>
            <p style={{ fontSize: '1.33em', padding: '0 10%' }}>
              Record your message, Upload your list, Send!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>Business Solutions That Deliver</p>
        </Divider>
        <Header as="h3" textAlign="center" style={{ fontSize: '2em' }}>
          Sign Up Today
        </Header>
        <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
          Fill out our simple form to begin. There is no contractual commitment
          and you can stop any time youd like. We promise satisfaction and look
          forward to sharing our powerful business tools with you!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Butt>
            <FormDialog
              buttonTitle="Let's Get Started"
              icon={<Icon name="arrow right" />}
              style={{
                display: 'flex',

                margin: '0 auto',
                textAlign: 'center',
              }}
            />
          </Butt>
        </div>
      </Container>
    </Segment>
    <Footer />
  </>
)
export default HomepageLayout
