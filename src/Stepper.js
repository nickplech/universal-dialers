import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import FormDialog from './PopForm'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '400px',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 10,
  },
  resetContainer: {
    padding: theme.spacing.unit * 2,
  },
  connectorActive: {
    '& $connectorLine': {
      borderColor: theme.palette.secondary.main,
    },
  },
  connectorCompleted: {
    '& $connectorLine': {
      borderColor: theme.palette.primary.main,
    },
  },
  connectorDisabled: {
    '& $connectorLine': {
      borderColor: theme.palette.grey[100],
    },
  },
})

function getSteps() {
  return [
    'Upload Your List',
    'Record Audio',
    'Enter Your Phone Number',
    'Select Time & Date',
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Upload your number list so users receive your Ringless Voicemail Drop`
    case 1:
      return 'Our system will call you so you can immediately record your message directly from your phone. You may also upload your own audio file'
    case 2:
      return `Enter the phone number you want to show on the caller ID of the user receiving the Ringless Voicemail Drop`
    case 3:
      return 'Select the time and date in which your Ringless Voicemail Drop will be deployed'
    default:
      return 'Unknown step'
  }
}
const Steppy = styled.div`
  margin-left: 20px;
  font-family: 'Montserrat', sans-serif;
  .labeler {
    font-size: 24px;
    font-weight: 800;
  }
`
class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <Steppy className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography
                  style={{
                    fontSize: '20px',
                    padding: '8px 12px',
                    color: 'rgba(100,140,230,1)',
                    border: '2px solid rgba(100,140,230,.8)',
                    background: 'transparent',
                    borderRadius: '5px',
                  }}
                >
                  {getStepContent(index)}
                </Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next Step'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography
              style={{
                fontSize: '20px',
                padding: '8px 12px',
                background: 'rgba(240,160,10,1',
                boxShadow: '1px 2px 4px 2px rgba(0,0,0,.25)',
                color: 'white',
              }}
            >
              Spread Your Business to Potential Customers Everywhere!
            </Typography>
            <FormDialog onClick={this.handleReset} />{' '}
            <Button onClick={this.handleReset} className={classes.button}>
              Watch Again
            </Button>
          </Paper>
        )}
      </Steppy>
    )
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(VerticalLinearStepper)
