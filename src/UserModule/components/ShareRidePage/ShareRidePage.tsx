import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from '../../styledComponents'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { RidePage } from '../common/RidePage'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'
interface ShareRidePageProps extends WithTranslation {
  onClickShare: (details: object) => void
}

@observer
class ShareRidePage extends Component<ShareRidePageProps> {
  render() {
    const { onClickShare, t } = this.props
    return (
      <RidePage
        onClick={onClickShare}
        title={t('letsride:shareRide')}
        buttonText={t('letsride:shareLable')}
        seats={t('letsride:noOfSeatsAvailable')}
        quantity={t('letsride:assetQuantity')}
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(ShareRidePage)
