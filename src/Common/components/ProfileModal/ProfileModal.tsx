import React, { Component } from 'react'
import Modal from 'react-modal'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ModalContent, CloseLink } from './styledComponents'
import { Button } from '../Button'

interface ProfileModalProps extends RouteComponentProps {
  isOpen: boolean
  handleClick: () => void
  customStyles: any
}
class ProfileModal extends Component<ProfileModalProps> {
  signOut = () => {}
  render() {
    const { isOpen, handleClick, customStyles } = this.props
    return (
      <Modal isOpen={isOpen} style={customStyles}>
        <ModalContent>
          <CloseLink onClick={handleClick}>X</CloseLink>
        </ModalContent>
      </Modal>
    )
  }
}

export default withRouter(ProfileModal)
