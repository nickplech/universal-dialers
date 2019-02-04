import React from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'
import { Link, BrowserRouter } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <Link to="/">
                    <List.Item>Home</List.Item>
                  </Link>
                  <Link to="/pricing">
                    <List.Item>Sign Up</List.Item>
                  </Link>
                  <Link to="/faq">
                    <List.Item>FAQ</List.Item>
                  </Link>
                  <Link to="/">
                    <List.Item>Login</List.Item>
                  </Link>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List inverted>
                  <List.Item>
                    {' '}
                    <Link to="/services/voicebroadcast">
                      Voice Broadcasting
                    </Link>
                  </List.Item>
                  <List.Item>
                    {' '}
                    <Link to="/services/dialer">Predictive Dialer</Link>
                  </List.Item>
                  <List.Item>
                    {' '}
                    <Link to="/services/ringless">Ringless Voicemail</Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/services/sms">SMS</Link>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Questions?
                </Header>
                <p>
                  Call one of our friendly support representatives at{' '}
                  <a href="tel: 8664035986"> (866)403-5986</a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}

export default Footer
