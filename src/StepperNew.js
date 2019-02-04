import React, { Component } from 'react'
import styled from 'styled-components'

import CountUp, { startAnimation } from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  flex-flow: row wrap;

  .subFlex {
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
    height: 120px;
    width: 120px;
    margin: 20px 50px;
    border-radius: 50%;
    color: white
    font-size: 28px;
    border: 3px solid white;
    box-shadow: -3px -3px 5px 2px rgba(0,0,0,.2);
  }
    .title2 {
    display: flex;
    flex-flow: column;
    color: white;
    position: relative;
  align-items: center;
    font-family: 'Hanit', sans-serif;
    margin-top: -50px;
    background: rgba(100,110,220,1);
    padding: 5px 7px;
    z-index: 3;

  }
  .title {
    display: flex;
    flex-flow: column;
    color: white;
  align-items: center;
    font-family: 'Hanit', sans-serif;
  }
  @media (max-width:768px) {
    flex-flow: column;
  }
`
const White = styled.span`
  color: white;
`

class StepperNew extends Component {
  constructor(props) {
    super(props)
    this.onVisibilityChange = this.onVisibilityChange.bind(this)
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      startAnimation(this.myCountUp)
    }
  }

  render() {
    return (
      <Flex>
        <div className="title">
          <div className="subFlex">
            <CountUp
              decimals={1}
              start={0}
              end={99.9}
              suffix="%"
              duration={5}
              ref={countUp => {
                this.myCountUp = countUp
              }}
            />
          </div>
          <h3 className="title2">Sending Success Rate</h3>
        </div>
        <div className="title">
          <div className="subFlex">
            <CountUp
              decimals={0}
              start={0}
              end={96}
              suffix="%"
              duration={5}
              ref={countUp => {
                this.myCountUp = countUp
              }}
            />
          </div>
          <h3 className="title2">Message Listen Rate</h3>
        </div>
        <div className="title">
          <div className="subFlex">
            <CountUp
              decimals={0}
              start={0}
              end={1000}
              suffix="s"
              duration={4}
              ref={countUp => {
                this.myCountUp = countUp
              }}
            />
          </div>
          <h3 className="title2">Of Message in Minutes</h3>
        </div>
      </Flex>
    )
  }
}
export default StepperNew
