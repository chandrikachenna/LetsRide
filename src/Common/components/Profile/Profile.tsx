import React, { Component } from 'react'
import { ProfileWrapper } from './styledComponents'

interface ProfileProps {
  imgSrc: string
  onClickProfile: () => void
}
class Profile extends Component<ProfileProps> {
  render() {
    const { imgSrc, onClickProfile } = this.props
    return <ProfileWrapper src={imgSrc} onClick={onClickProfile} />
  }
}

export default Profile
