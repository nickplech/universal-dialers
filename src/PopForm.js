import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'

import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const Title = styled.h1`
  font-family: 'Kanit', sans-serif;
  text-align: center;

  color: rgba(100, 100, 220, 1);
`
class FormDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(
      'Thank You for Submitting! A Customer Service Representative Will Contact You During Business Hours.',
    )
    this.handleClose()
  }
  render() {
    return (
      <>
        <Button
          fullWidth
          className="button"
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          {this.props.buttonTitle}
          {this.props.icon}
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {' '}
          <form action="/" method="POST" onSubmit={this.handleSubmit}>
            <DialogContent>
              {' '}
              <Title>Start Sending With Universal Dialers!</Title>
              <DialogContentText>
                Reach thousands of customers in minutes with our 100% cloud
                based system. Contact your lists from anywhere with 99.9%
                uptime!
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                onChange={this.handleChange}
                id="name"
                label="Name"
                type="text"
                fullWidth
                required
              />
              <TextField
                margin="dense"
                id="phone"
                name="phone"
                onChange={this.handleChange}
                label="Phone Number"
                type="phone"
                required
                fullWidth
              />
              <TextField
                margin="dense"
                id="email"
                name="email"
                onChange={this.handleChange}
                label="Email Address"
                type="email"
                required
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    )
  }
}

export default FormDialog
