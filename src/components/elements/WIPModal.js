import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class WIPModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.modal !== this.props.modal) {
      this.setState({
        modal: this.props.modal
      })
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <div>
        <Button color='danger' onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Private Repo / WIP</ModalHeader>
          <ModalBody>
            This project is currently under development and the repository is private. For access to the current working prototype and/or the repository, please email josephemswiler@gmail.com.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Awesome</Button>
            {' '}
            {/* <Button color='secondary' onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
