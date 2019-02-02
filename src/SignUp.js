import React, { Component } from 'react'

import { Button, Form, Icon, Message } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    agree: false,
    submittedFirstName: '',
    submittedLastName: '',
    submittedEmail: '',
    submittedPhone: '',
    submittedAgree: '',
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleBool = (e, { agree, value }) => {
    this.setState({ agree: !agree })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { firstName, lastName, email, phone, agree } = this.state
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      agree: '',
      submittedFirstName: firstName,
      submittedLastName: lastName,
      submittedEmail: email,
      submittedPhone: phone,
      submittedAgree: agree,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      agree,
      submittedFirstName,
      submittedLastName,
      submittedPhone,
      submittedEmail,
      submittedAgree,
    } = this.state

    return (
      <>
        <div style={{ paddingTop: '75px' }}>
          <Message
            attached
            header="Welcome"
            content="Fill out the form below to get started"
          />
          <Form className="attached fluid segment" onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="First Name"
                placeholder="First Name"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Input
              label="Email"
              placeholder="johndoe@email.com"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Phone Number"
              placeholder="(555)555-5555"
              type="number"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              inline
              label="I agree to the terms and conditions"
              name="agree"
              value={agree}
              onChange={this.toggleBool}
            />

            {this.handleSubmit && (
              <Message
                success
                header="Form Completed"
                content="You're all signed up "
              />
            )}
            <Form.Button content="Submit" color="blue">
              Submit
            </Form.Button>
          </Form>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Already signed up?&nbsp;<a href="#">Login here</a>&nbsp;instead.
          </Message>
        </div>
        <div>
          <strong>onChange:</strong>
          <pre>
            {JSON.stringify(
              { firstName, lastName, phone, email, agree },
              null,
              2,
            )}
          </pre>
          <strong>onSubmit:</strong>
          <pre>
            {JSON.stringify(
              {
                submittedFirstName,
                submittedLastName,
                submittedEmail,
                submittedPhone,
                submittedAgree,
              },
              null,
              2,
            )}
          </pre>
        </div>
      </>
    )
  }
}

export default SignUp
