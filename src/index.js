import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import TemporaryDrawer from './MobileMenu'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import DropdownMultiple from './Dropdown'
import HomepageLayout from './App'
import Services from './Services'
import FormDialog from './PopForm'
import styled from 'styled-components'
import Faq from './Faq'
import SignUp from './SignUp'
import Pricing from './Pricing'

import './index.css'
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const NoLine = styled.div`
  .noLine {
    display: flex;
    align-items: center;
    align-content: center;
    height: 50px;

    &:hover {
      border-bottom: 2px solid white;
    }
    .words {
      color: rgba(245, 245, 245, 1);
      &:hover {
        color: rgba(50, 140, 240, 1);
      }
    }
  }
`

const NAV_DATA = [
  {
    name: 'Home',
    path: '/',
  },

  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Common Questions',
    path: '/faq',
  },
]
class DesktopContainer extends Component {
  state = {
    location: [
      {
        id: 0,
        text: 'Voice Broadcasting',
        path: '/services/voicebroadcast',
      },
      {
        id: 1,
        text: 'Predictive Dialer',
        path: '/services/dialer',
      },
      {
        id: 2,
        text: 'Ringless Voicemail',
        path: '/services/ringless',
      },

      {
        id: 3,
        text: 'SMS',
        path: '/services/sms',
      },
    ],
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <div>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ height: 70, padding: '1em 0em' }}
              vertical
            >
              {' '}
              <NoLine>
                <Menu
                  fixed={fixed ? 'top' : null}
                  inverted
                  pointing={!fixed}
                  size="large"
                >
                  <Container>
                    {NAV_DATA.map(({ name, path }, i) => (
                      <Link to={path} className="noLine" key={i}>
                        <Menu.Item>
                          <h3 className="words">
                            <strong>{name}</strong>
                          </h3>
                        </Menu.Item>
                      </Link>
                    ))}

                    <DropdownMultiple
                      titleHelper="Services"
                      title="Services"
                      list={this.state.location}
                    />

                    <Menu.Item position="right">
                      <Button
                        href="https://app.universaldialers.com"
                        inverted
                        style={{ padding: '8px 12px' }}
                      >
                        Log in
                      </Button>
                    </Menu.Item>
                  </Container>
                </Menu>
              </NoLine>
            </Segment>
          </Visibility>

          {children}
        </Responsive>
      </div>
    )
  }
}

class MobileContainer extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <div>
        <Responsive
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <TemporaryDrawer props={this.props.children} />
        </Responsive>
      </div>
    )
  }
}

const DATA = [
  {
    textTitle2: 'How Does Ringless Voicemail Work?',
    textChunk2:
      'You can set up your ringless voicemail campaign in just a four easy steps. 1. Record a voicemail to be left in voicemail boxes. 2. Determine the time of day you want to leave a voicemail. 3. Upload your list of leads into a campaign and run it. 4. The dialer leaves voicemails in people’s voicemail boxes at your predetermined time. Thats it! Ringless voicemail is simple to set up and implement.Your leads will be calling you back by the afternoon to find out more about your offer. Consider the amount of time you can save by reaching directly into prospects’ voicemail boxes.Don’t interrupt their day with a call from a random number.Instead, you can pique their curiosity when a new voicemail appears with no missed call! Allow the dialer to do the work for you while you save the time and money it takes to employ a warm- up team.',

    textTitle3: 'Can I Use Ringless Voicemail by Myself? Do I need a Team?',
    textChunk3:
      'This depends highly upon the amount of messages you plan to leave. If you run a small campaign and can handle return calls by yourself, you can operate as a sole entity. As long as you can take calls as they come in you can manage your own ringless voicemail operation. If you are dialing hundreds of thousands of numbers, it may be helpful to have a team to take the tens of thousands of calls you will receive from your campaigns.It is important to answer the calls back in order to capitalize on the lead’s curiosity and warm them up to the idea of your product.',
    textTitle4: '',
    textChunk4: '',
    textTitle1: 'Ringless Voicemail Drops',
    textChunk1:
      'Multiply your response rates overnight! Ringless voicemail (or RVM for short) is the latest revolutionary technology in the contact center and telephony world. With ringless voicemail you are able to leave a pre-recorded voicemail dropped directly into the prospect’s voicemail inbox without ever ringing their mobile phone. 96% of people check their voicemail messages due to curiosity of who left a message without calling. This high percentage of people who check their voicemails result in over a 22% response rate!',
    title: 'Ringless\nVoicemail\nDrop',
    key: '0',
    subTitle:
      'Drop messages directly into mobile voicemail boxes without ringing the phone.',
  },
  {
    textTitle1: 'Text Message Solutions',
    textChunk1: '',
    textTitle2: '',
    textChunk2: '',
    textTitle3: '',
    textChunk3: '',
    textTitle4: '',
    textChunk4: '',
    title: `SMS`,
    key: '1',
  },
  {
    textTitle1: 'Voice Broadcasting',
    textChunk1:
      'Things like mailers, radio ads, and television can all be effective. However, they have one common problem. They take time to develop, and it can be months from the time you come up with an idea to when a consumer sees or hears your message. This makes traditional forms of advertising ineffective for those that need to respond quickly to something in the news or community. For example, if you are a non-profit that helps families after a disaster, you need to send out a message asking for support as soon as the disaster hits, not a month later.',
    textTitle2: 'Got a Last Minute Sale or Event?',
    textChunk2:
      'Simultaneously, if you are a business that has decided to run a last minute clearance, you need to get the word out immediately in order to move your old inventory. Voice broadcasting allows you to do so. This form of advertising is incredibly effective for sending out last minute messages. You and your team can come up with a fantastic idea and execute on it that same day. In fact, if you already have a list uploaded, you can have calls go out within five minutes of recording your message. It is fast, easy, and affordable, making voice broadcasting an essential part of any marketing plan.',
    textTitle3: 'What You Need To Get Started',
    textChunk3:
      'In order to get started, you will need a lead list and a message. If you don’t have a lead list of existing customers, you can always buy one online. You can even have your list targeted to reach a specific demographic group, just be sure that it has been scrubbed against the DNC. After your list is in the system, you can either upload your message or have the software call you so that you can record it. Both should be fairly clear, and you can have the system complete a test call to ensure that it is. You can then determine the time of day that you want your calls to go out and how many times you want the voice broadcasting software to try and reach people. It is that simple. Voice broadcasting makes it possible to reach a large amount of people in a short amount of time and at a very low cost. If your company isn’t currently using this solution, you need to add it to your wheelhouse.',
    textTitle4: '',
    textChunk4: '',
    title: `Voice\nBroadcasting`,
    key: '2',
    subTitle:
      'Record your message, upload your contacts, and schedule a campaign to connect with customers and find new leads.',
  },
  {
    textTitle1: 'Increase your agents productivity by 500%',
    textChunk1:
      'A predictive dialer uses an algorithm to increase your agents’ efficiency.Sometimes incorrectly referred to as a power or auto dialer, it enables agents to reach more customers or prospects in less time.',
    textTitle2: 'Take Campaigns to the Next Level',
    textChunk2:
      ' You need predictive dialing software if you aim to grow your revenue and take your campaigns to the next level.You don’t need any heavy equipment with our cloud- based solution.All you need is a headset and a computer to begin dialing from anywhere in the world.The hosted outbound dialer calls through your list and transfers live calls to awaiting agents.No more listening to voicemails or wasting time on dead numbers – the software & skips all these for you.',
    textTitle3: 'What does it cost to use a cloud predictive dialer?',
    textChunk3:
      'Since you are accessing a cloud-based solution, you don’t have to pay for the software or a server to house it on. The service provider you work with will be responsible for all of the system upkeep and maintenance as well. That means that you only need to pay for your usage. You will be able to track how many minutes are being used on any given day and set your budget accordingly. As such, how much it costs is entirely up to you.',
    textTitle4: 'How can I track results when using a cloud predictive dialer?',
    textChunk4:
      'This is extremely easy. You will be able to login and see how many calls have been made, how many people answered, how many answering machines picked up, the number of phone numbers that were disconnected, etc. Keeping track of dispositions is easier than ever when using a cloud predictive dialer. You will still need to get sales reports from your agents. By comparing the two reports, you will be able to see how many calls need to be made to make one sale or how many live answers need to occur to get one appointment. This will help you to plan your sales strategy and to staff correctly. For example, if you need to double your sales numbers, you will know how many agents to hire, how many hours to give them, etc. A cloud predictive dialer gives you the data you need to make educated and informed business decisions in a timely fashion.',
    title: `Cloud\nPredictive\nDialer`,
    key: '3',
    subTitle:
      'Produce better results with a Cloud Predictive Dialer and connect with more live prospects.',
  },
]
const ResponsiveContainer = ({ children, props }) => (
  <Router>
    <ScrollToTop>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
      <Route exact path="/" component={HomepageLayout} />
      <Route
        path="/services/ringless"
        render={props => (
          <Services
            {...props}
            title={DATA[0].title}
            subTitle={DATA[0].subTitle}
            textTitle1={DATA[0].textTitle1}
            textChunk1={DATA[0].textChunk1}
            textTitle2={DATA[0].textTitle2}
            textChunk2={DATA[0].textChunk2}
            textTitle3={DATA[0].textTitle3}
            textChunk3={DATA[0].textChunk3}
            textTitle4={DATA[0].textTitle4}
            textChunk4={DATA[0].textChunk4}
          />
        )}
      />
      <Route
        path="/services/sms"
        render={props => (
          <Services
            {...props}
            title={DATA[1].title}
            textTitle1={DATA[1].textTitle1}
            textChunk1={DATA[1].textChunk1}
            textTitle2={DATA[1].textTitle2}
            textChunk2={DATA[1].textChunk2}
            textTitle3={DATA[1].textTitle3}
            textChunk3={DATA[1].textChunk3}
            textTitle4={DATA[1].textTitle4}
            textChunk4={DATA[1].textChunk4}
          />
        )}
      />
      <Route
        path="/services/dialer"
        render={props => (
          <Services
            {...props}
            title={DATA[3].title}
            subTitle={DATA[3].subTitle}
            textTitle1={DATA[3].textTitle1}
            textChunk1={DATA[3].textChunk1}
            textTitle2={DATA[3].textTitle2}
            textChunk2={DATA[3].textChunk2}
            textTitle3={DATA[3].textTitle3}
            textChunk3={DATA[3].textChunk3}
            textTitle4={DATA[3].textTitle4}
            textChunk4={DATA[3].textChunk4}
          />
        )}
      />
      <Route
        path="/services/voicebroadcast"
        render={props => (
          <Services
            {...props}
            title={DATA[2].title}
            subTitle={DATA[2].subTitle}
            textTitle1={DATA[2].textTitle1}
            textChunk1={DATA[2].textChunk1}
            textTitle2={DATA[2].textTitle2}
            textChunk2={DATA[2].textChunk2}
            textTitle3={DATA[2].textTitle3}
            textChunk3={DATA[2].textChunk3}
            textTitle4={DATA[2].textTitle4}
            textChunk4={DATA[2].textChunk4}
          />
        )}
      />

      <Route path="/pricing" component={Pricing} />
      <Route path="/faq" component={Faq} />
    </ScrollToTop>
  </Router>
)
ReactDOM.render(<ResponsiveContainer />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
