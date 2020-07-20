import React, { Component } from 'react'
import Modal from 'react-modal'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface ProfileModalProps extends RouteComponentProps {
  isOpen: boolean
  handleClick: () => void
  customStyles: any
}
class ProfileModal extends Component<ProfileModalProps> {
  signOut = () => {}
  render() {
    const { isOpen, handleClick, customStyles } = this.props
    return <Modal isOpen={isOpen} style={customStyles}></Modal>
  }
}

export default withRouter(ProfileModal)
