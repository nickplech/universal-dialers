import React from 'react'
// import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import FormDialog from './PopForm'
import Zoom from '@material-ui/core/Zoom'
import StepsSection from './StepsSection'
import styled from 'styled-components'
import logo from './logoo.png'
import mockup from './Mockup.jpg'
import pic from './components.png'
import pic1 from './rocket.png'
import pic2 from './themes.png'
import pic3 from './testing.png'
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
  height: 100px;
  width: auto;
`

const Hero = styled.div`
  display: flex;
  justify-content: flex-start;
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
    background: rgba(100, 100, 240, 1);
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
const OutSpan = styled.span`
  .element {
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
  }
`
const LogoSmaller = styled.img`
  width: 560px;
  height: auto;
  margin-top: 200px;
  @media (max-width: 768px) {
    width: 320px;
    height: auto;
    margin-top: 0px;
  }
`
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Zoom in style={{ transitionDelay: '500ms' }}>
      <LogoSmaller src={logo} alt="logo" />
    </Zoom>
    <Header
      as="h1"
      content={
        ' Voice Broadcasting ' +
        ' ' +
        ' | ' +
        ' Cloud Predictive Dialer ' +
        ' | ' +
        ' SMS'
      }
      inverted
      style={{
        position: 'relative',
        top: '25px',
        textTransform: 'uppercase',
        fontSize: mobile ? '1em' : '1.5em',
        textAlign: 'left',
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
        textAlign: 'left',
        fontWeight: '900',
        marginTop: '0',
        marginBottom: '0',
      }}
    >
      <OutSpan className="element" style={{ color: 'rgba(100,100,240,1)' }}>
        &amp;
      </OutSpan>{' '}
      Ringless Voicemail Drops
    </p>
    {/* <Header
      as="h2"
      content="Powerful, Modern, and Highly Effective Marketing Tools for Business"
      inverted
      style={{
        position: 'relative',
        top: '220px',

        fontSize: mobile ? '1.5em' : '1.4em',
        textAlign: 'left',
        fontWeight: '100',
        marginTop: '20px',
      }}
    /> */}
    <Butt>
      <FormDialog
        buttonTitle="Lets Get Started"
        icon={<Icon className="arrow" name="right arrow" />}
      />
    </Butt>
  </Container>
)

const ICONS = [
  {
    url: `${pic}`,
  },
  // {
  //   url: `${pic1}`,
  // },
  {
    url: `${pic2}`,
  },
  {
    url: `${pic3}`,
  },
]

const MockUpScreen = styled.img`
  width: 500px;
  height: auto;
  @media (max-width: 702px) {
    max-width: 300px;
    height: auto;
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
            <Grid.Column floated="left" width={8}>
              <HomepageHeading />
            </Grid.Column>
            <Grid.Column floated="right" width={6} />
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
        background:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSJyZ2JhKDEwMCwxMDAsMjIwLDEpIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsMTMwLDIyMCwuNCkiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8cGF0aCBkPSJNMjggMEwyOCAzNEwwIDUwTDAgODRMMjggMTAwTDU2IDg0TDU2IDUwTDI4IDM0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAwLDEzMCwyMDAsLjQpIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPC9zdmc+")',
        minHeight: '700px',
      }}
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column floated="right" width={7} />
          <Grid.Column width={7}>
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
    <StepsSection />
    <Segment style={{ padding: '0em' }} vertical>
      <Grid
        style={{ padding: '0em', textAlign: 'center' }}
        celled="internally"
        columns="equal"
        stackable
      >
        {/* <Grid.Row
          textAlign="center"
          style={{ padding: ' 0px 0px', margin: '70px auto' }}
        >
          <Grid.Column width={2} />
          {ICONS.map((icon, i) => (
            <Grid.Column key={icon.i} width={4}>
              <Img src={icon.url} key={icon.url} alt="icons" />
            </Grid.Column>
          ))}
          <Grid.Column width={2} />
        </Grid.Row> */}
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
              color="purple"
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
              color="purple"
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
              color="purple"
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
