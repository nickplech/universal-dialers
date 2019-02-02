import React from 'react'
import pricing from './pricing.png'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Questions from './Questions'
import FormDialog from './PopForm'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 5}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: '#64b5f6',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
  },
  Button: {
    padding: theme.spacing.unit * 0,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
})

const tiers = [
  {
    title: 'Pay As You Go Plan',
    price: '0',
    description: [
      '100 deliveries for $10',
      '500 deliveries for $40',
      '1,000 deliveries for $60',
      '5,000 deliveries for $225',
      '10,000 deliveries for $400',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Monthly Messaging Plan*',

    price: '15',
    description: [
      '100 deliveries for $8 /mo',
      '300 deliveries for $25 /mo',
      '2,000 deliveries for $100 /mo',
      '6,000 deliveries for $250 /mo',
      '13,000 deliveries for $500 /mo',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
]

// const theme = createMuiTheme({
//   padding: {
//     padding: theme.spacing.unit,
//   },
// })

function Pricing(props) {
  const { classes } = props

  return (
    <React.Fragment>
      <CssBaseline />

      <Toolbar />

      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <img
            src={pricing}
            alt="pricing"
            style={{ width: '360px', textAlign: 'center' }}
          />

          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            component="p"
          >
            <b>Pay Only For Delivered Voicemail Messages</b>
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            component="p"
          >
            Simply click the Sign Up button below, fill out the 30 second form
            and submit. Following your submission, you will be contacted to
            further personalize your account.
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <FormDialog buttonTitle="SIGN UP" />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <Questions />
      <Footer />
    </React.Fragment>
  )
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Pricing)
