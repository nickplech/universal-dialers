import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Icon } from 'semantic-ui-react'

const Menu = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 50px;
  display: flex;

  .login {
    position: absolute;
    display: inline-flex;
    right: 30px;
    padding: 1px 2px;
    border: 1px solid white;
    color: white;
  }
`
const styles = {
  list: {
    width: 250,

    background: 'rgba(0,0,0,.7)',
  },
  fullList: {
    width: 'auto',

    background: 'rgba(0,0,0,.7)',
  },
  word: {
    color: 'white',
    fontSize: '18px',
  },
}

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home', 'Pricing', 'Common Questions'].map((text, index) => (
            <Link to="/" key={text}>
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <Icon name="arrow left" />
                  ) : (
                    <Icon name="arrow right" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>{' '}
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            'Voice Broadcasting',
            'Predictive Dialer',
            'Ringless Voicemail',
            'Sms',
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Icon name="arrow left" />
                ) : (
                  <Icon name="arrow right" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Home', 'Pricing', 'Common Questions'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon />
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            <Link to="/services/voicebroadcast">'Voice Broadcasting'</Link>,
            <Link to="/services/dialer">'Predictive Dialer'</Link>,
            <Link to="/services/ringless">'Ringless Voicemail'</Link>,
            <Link to="/services/sms">'Sms'</Link>,
          ].map((text, index) => (
            <ListItem button key={index}>
              <Icon name="info circle " color="blue" inverted />

              <ListItemText className={classes.word} primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return (
      <Menu>
        <Icon
          style={{ paddingLeft: '15px', paddingTop: '10px' }}
          name="content"
          size="large"
          onClick={this.toggleDrawer('top', true)}
        />

        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Button
          className="login"
          href="https://app.universaldialers.com"
          style={{ padding: '8px 12px' }}
        >
          Log in
        </Button>
      </Menu>
    )
  }
}

export default withStyles(styles)(TemporaryDrawer)
