import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observable } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Logo } from '../../../../Common/components/Logo'
import { DropDown } from '../../../../Common/components/DropDown'
import { ProfileModal } from '../../../../Common/components/ProfileModal'
import { pageConstants } from '../../../constants/PageConstants'
import {
  goToRequstRidePage,
  goToRequstAssetTransportPage,
  goToShareRidePage,
  goToShareTravelInfoPage,
  goToHomePage
} from '../../../utils/NavigationUtils'

import {
  PageHeaderWrapper,
  LogoHloder,
  NavBar,
  Trigger,
  UserProfile,
  ProfileWrapper
} from './styledComponents'

const requestOptions = [
  { key: 'ride', text: 'Ride', value: 'ride' },
  { key: 'assetTransport', text: 'Asset Transport', value: 'assetTransport' }
]
const shareOptions = [
  { key: 'ride', text: 'Ride', value: 'ride' },
  { key: 'travelInfo', text: 'Travel Info', value: 'travelInfo' }
]
const customStyles = {
  content: {
    top: '8%',
    left: '85%',
    position: 'absolute',
    width: '150px',
    height: '150px'
  }
}
interface PageHeaderProps extends RouteComponentProps, WithTranslation {
  imgSrc: string
}

@observer
class PageHeader extends Component<PageHeaderProps> {
  @observable isOpen: boolean = false
  goToHomePage = () => {
    const { history } = this.props
    goToHomePage(history)
  }
  navigateToRequestPage = (event, data) => {
    const { history } = this.props
    switch (data.value) {
      case pageConstants.ride:
        goToRequstRidePage(history)
        break
      case pageConstants.assetTransport:
        goToRequstAssetTransportPage(history)
        break
    }
  }

  navigationToSharePage = (event, data) => {
    const { history } = this.props
    switch (data.value) {
      case pageConstants.ride:
        goToShareRidePage(history)
        break
      case pageConstants.travelInfo:
        goToShareTravelInfoPage(history)
        break
    }
  }
  onClickProfile = () => {
    this.isOpen = true
  }
  closeProfileModal = () => {
    this.isOpen = false
  }
  render() {
    const { t, imgSrc } = this.props
    return (
      <PageHeaderWrapper>
        <LogoHloder onClick={this.goToHomePage}>
          <Logo height={71} width={71} />
        </LogoHloder>
        <NavBar>
          <DropDown
            options={requestOptions}
            trigger={<Trigger>{t('letsride:request')}</Trigger>}
            onChange={this.navigateToRequestPage}
          />
          <DropDown
            options={shareOptions}
            trigger={<Trigger>{t('letsride:share')}</Trigger>}
            onChange={this.navigationToSharePage}
          />
          <UserProfile>
            <ProfileWrapper
              imgSrc={imgSrc}
              onClickProfile={this.onClickProfile}
            />
            <ProfileModal
              isOpen={this.isOpen}
              handleClick={this.closeProfileModal}
              customStyles={customStyles}
            />
          </UserProfile>
        </NavBar>
      </PageHeaderWrapper>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(PageHeader)
)
