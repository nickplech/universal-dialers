// import React from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import Drawer from '@material-ui/core/Drawer'
// import Button from '@material-ui/core/Button'
// import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Mail'

// const styles = {
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// }

// class TemporaryDrawer extends React.Component {
//   state = {
//     top: false,
//   }

//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open,
//     })
//   }

//   render() {
//     const { classes } = this.props

//     const sideList = (
//       <div className={classes.list}>
//         <List>
//           {['Home', 'Pricing', 'Common Questions'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {[
//             'Voice Broadcasting',
//             'Predictive Dialer',
//             'Ringless Voicemail',
//             'Sms',
//           ].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     )

//     const fullList = (
//       <div className={classes.fullList}>
//         <List>
//           {['Home', 'Pricing', 'Common Questions'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {[
//             'Voice Broadcasting',
//             'Predictive Dialer',
//             'Ringless Voicemail',
//             'Sms',
//           ].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     )

//     return (
//       <div>
//         <Icon name="menu" onClick={this.toggleDrawer('top', true)}>Open Top</Icon>

//         <Drawer
//           anchor="top"
//           open={this.state.top}
//           onClose={this.toggleDrawer('top', false)}
//         >
//           <div
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer('top', false)}
//             onKeyDown={this.toggleDrawer('top', false)}
//           >
//             {fullList}
//           </div>
//         </Drawer>
//       </div>
//     )
//   }
// }

// TemporaryDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

// export default withStyles(styles)(TemporaryDrawer)
