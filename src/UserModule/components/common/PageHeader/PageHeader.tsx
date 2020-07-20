import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'

import { Logo } from '../../../../Common/components/Logo'
import { DropDown } from '../../../../Common/components/DropDown'

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
    top: '10%',
    left: '85%',
    position: 'absolute',
    width: '200px',
    height: '200px'
  }
}
interface PageHeaderProps extends WithTranslation {
  imgSrc: string
}

@observer
class PageHeader extends Component<PageHeaderProps> {
  navigation = (event, data) => {
    console.log(data.value)
  }
  onClickProfile = () => {}
  render() {
    const { t, imgSrc } = this.props
    return (
      <PageHeaderWrapper>
        <LogoHloder>
          <Logo height={71} width={71} />
        </LogoHloder>
        <NavBar>
          <DropDown
            options={requestOptions}
            trigger={<Trigger>{t('letsride:request')}</Trigger>}
            onChange={this.navigation}
          />
          <DropDown
            options={shareOptions}
            trigger={<Trigger>{t('letsride:share')}</Trigger>}
            onChange={this.navigation}
          />
          <UserProfile>
            <ProfileWrapper
              imgSrc={imgSrc}
              onClickProfile={this.onClickProfile}
            />
          </UserProfile>
        </NavBar>
      </PageHeaderWrapper>
    )
  }
}

export default withTranslation('translation', { withRef: true })(PageHeader)
