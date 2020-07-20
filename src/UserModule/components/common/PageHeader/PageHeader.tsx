import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
  PageHeaderWrapper,
  LogoHloder,
  NavBar,
  Trigger
} from './styledComponents'
import { Logo } from '../../../../Common/components/Logo'

import { DropDown } from '../../../../Common/components/DropDown'
const requestOptions = [
  { key: 'ride', text: 'Ride', value: 'ride' },
  { key: 'assetTransport', text: 'Asset Transport', value: 'assetTransport' }
]
const shareOptions = [
  { key: 'ride', text: 'Ride', value: 'ride' },
  { key: 'travelInfo', text: 'Travel Info', value: 'travelInfo' }
]

interface PageHeaderProps extends WithTranslation {}

@observer
class PageHeader extends Component<PageHeaderProps> {
  navigation = (event, data) => {
    console.log(data.value)
  }
  render() {
    const { t } = this.props
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
        </NavBar>
      </PageHeaderWrapper>
    )
  }
}

export default withTranslation('translation', { withRef: true })(PageHeader)
