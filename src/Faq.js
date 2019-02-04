import React, { Fragment } from 'react'
import { Icon } from 'semantic-ui-react'
import posed from 'react-pose'
import styled from 'styled-components'
import Questions from './Questions'
import Footer from './Footer'

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

const Accordians = styled.div`
  padding: 0;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: linear-gradient(-180deg, #ffffff 0%, #f3f3f3 100%);
  padding-bottom: 40px;

  #root {
    display: flex;
    flex-direction: column;
    width: 400px;
    color: white;
    font-family: 'PT Sans', Helvetica, sans-serif;
  }

  h1 {
    margin-bottom: 0px;
    color: #252942;
    text-align: center;
  }
  h2 {
    margin: 0;
    width: 60%;
    min-width: 350px;
  }
  .title {
    cursor: pointer;
    background: transparent;

    padding: 15px 8px;
    border-bottom: 1px solid rgba(100, 150, 240, 1);
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 14px;
    }

    h2 {
      font-size: 14px;
    }
  }
  .content {
    overflow: hidden;
    font-size: 18px;
    background: white;
    margin: 0;
    width: 60%;
    min-width: 350px;
  }

  .content-wrapper {
    padding: 20px 8px 25px 8px;
  }
`
const data = [
  {
    title: 'How does the service work?',
    content: `Our straight to voicemail technology skips the phone conversation and goes directly to voicemail. Recipients will receive a voicemail from the caller ID you enter when sending out your campaign.`,
  },
  {
    title: 'How successful can I expect my campaigns to be?',
    content: `We’ll send your voicemail to all of the phone numbers you select. If any of the messages can’t be delivered, you’ll be able to see that in your dashboard. You are never charged for undelivered ringless voicemails. Many of our customers track their ROI when running campaigns, which we highly recommend.`,
  },
  {
    title: 'How often should I leave ringless voice messages?',
    content: `The best approach for you will depend on your goals. Many of our customers send out small batches daily. If you expect a lot of call backs coming directly to you, we recommend spreading out your voicemail deliveries and sending them in batches of about 100 at a time. You can schedule them to be sent throughout the day, week or month.`,
  },
  {
    title: 'How do I upload my list of phone numbers?',
    content: `To upload your phone list, all you need is phone numbers in column A of your excel file saved as .CSV
`,
  },
  {
    title: 'Do I have to use all of my delivery credits at once?',
    content: `No you get 6 months to use them from time of purchase.

No contracts or set up fees, get started now!

`,
  },

  {
    title: 'Do my messages ever expire?',
    content: `
All Pay As You Go plan messages never expire.

Monthly Messaging plan credits are valid for 30 calendar days after your initial date of purchase and do not roll over towards the next month.`,
  },
]

class Faq extends React.Component {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <>
        <h1
          style={{
            paddingLeft: '5%',
            marginTop: '75px',
            fontSize: '22px',
            color: 'rgba(100,100,200,1)',
          }}
        >
          Frequently Asked Questions
        </h1>
        <Accordians>
          {data.map(({ title, content }, i) => (
            <Fragment key={i}>
              <h2
                className="title"
                onClick={() =>
                  this.setState({
                    open: open === i ? false : i,
                  })
                }
              >
                {open === i ? (
                  <Icon color="blue" name="chevron circle up" />
                ) : (
                  <Icon name="chevron circle down" />
                )}
                {title}
              </h2>
              <Content
                className="content"
                pose={open === i ? 'open' : 'closed'}
              >
                <div className="content-wrapper">{content}</div>
              </Content>
            </Fragment>
          ))}
        </Accordians>
        <Questions />
        <Footer />
      </>
    )
  }
}

export default Faq
