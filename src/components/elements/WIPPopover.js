import React from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import './WIPPopover.css'

export default class WIPPopover extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      popoverOpen: false
    }
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render () {
    return (
      <div>
        <Button
          id={`Popover-${this.props.projectName}`}
          onClick={this.toggle}
          className='ml-3 rounded-circle popover-btn'
        >
          <span className='popover-text'>WIP</span>
        </Button>
        <Popover
          placement='bottom'
          isOpen={this.state.popoverOpen}
          target={`Popover-${this.props.projectName}`}
          toggle={this.toggle}
          className='text-center popover-modal'
        >
          <PopoverHeader className='popover-modal popover-header'>Work In Progress!</PopoverHeader>
          <PopoverBody className='popover-modal'>
            {this.props.projectName}
            {' '}
            is currently under development and the repository is private. For access to the current working prototype, a project demo, or the repository, please email <a href={`mailto:josephemswiler@gmail.com?subject=${this.props.projectName}`}>josephemswiler@gmail.com</a>. 👍
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}
