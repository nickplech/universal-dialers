import React from 'react'
import { Container, Divider, Header, Segment } from 'semantic-ui-react'
const Questions = () => {
  return (
    <div>
      <Segment style={{ padding: '1rem 0 4rem 0' }} vertical>
        <Container text>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <p>Contact Universal Dialers</p>
          </Divider>
          <Header as="h3" style={{ fontSize: '2em', textAlign: 'center' }}>
            Have Questions for Us?
          </Header>
          <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
            Call our friendly support team at (949) 555-5555
          </p>
          <div style={{ textAlign: 'center' }}>
            <a
              href="mailto:sample@gmail.com"
              size="large"
              style={{ fontSize: '1.1em' }}
            >
              Send Us an Email by Clicking Here
            </a>
          </div>
        </Container>
      </Segment>
    </div>
  )
}

export default Questions
