import React from 'react'

import posed from 'react-pose'

const Box = posed.div({
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: {
      default: { ease: 'linear' },
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      default: { type: 'spring', stiffness: 800, damping: 30, duration: 1500 },
    },
  },
})

class Pulse extends React.Component {
  state = { isVisible: true }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible })
    }, 2000)
  }

  render() {
    const { isVisible } = this.state
    return <Box pose={isVisible ? 'visible' : 'hidden'}>{this.props.item}</Box>
  }
}

export default Pulse
