import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const DropIt = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  width: 222px;
  display: flex;

  .dd-list {
    z-index: 10;
    position: absolute;
    width: 80%;
    border-top: none;
    top: 40px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: rgb(27, 28, 29);
    -webkit-box-shadow: 0 2px 5px -1px #e8e8e8;
    box-shadow: 0 2px 5px -1px #e8e8e8;
    font-weight: 700;
    padding: 15px 0;
    max-height: 215px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .dd-header-arrow {
    margin: 22px 0;
    cursor: pointer;
  }
  .dd-header-title {
    margin: 15px 20px;
    margin-right: 10px;
    &:hover {
      /* border-bottom: 2px solid white; */
      cursor: pointer;
    }
  }
  .dd-list-item {
    width: 100%;
    font-size: 1.2rem;
    padding: 8px 10px;
    line-height: 1.6rem;
    text-align: left;
    cursor: default;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgba(100, 180, 240, 0.8);
    &:hover {
      color: #fff;
      background-color: orange;
    }
  }
`
class DropdownMultiple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      timeOut: null,
    }
    this.close = this.close.bind(this)
  }

  componentDidUpdate() {
    const { listOpen } = this.state
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener('click', this.close)
      } else {
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close)
  }

  close(timeOut) {
    this.setState({
      listOpen: false,
    })
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }))
  }

  render() {
    const { list } = this.props
    const { listOpen, headerTitle } = this.state
    return (
      <DropIt>
        <div
          className="dd-header"
          style={{ display: 'inline-flex', color: 'rgba(100, 180, 240, .8)' }}
          onClick={() => this.toggleList()}
        >
          <h3 className="dd-header-title">{headerTitle}</h3>
          {listOpen ? (
            <Icon
              className="dd-header-arrow"
              style={{ display: 'inline-flex' }}
              name="chevron circle down"
              size="small"
            />
          ) : (
            <Icon
              className="dd-header-arrow"
              style={{ display: 'inline-flex' }}
              name="chevron circle up"
              size="small"
            />
          )}
        </div>
        {listOpen && (
          <ul className="dd-list">
            {list.map(item => (
              <Link key={item.id} to={item.path}>
                <li onClick={this.close} className="dd-list-item">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </DropIt>
    )
  }
}

export default DropdownMultiple
