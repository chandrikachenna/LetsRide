import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { RidePage } from '../common/RidePage'
import { APIStatus } from '@ib/api-constants'

interface ShareRidePageProps extends WithTranslation {
  onClickShare: (details: object) => void
  apiStatus: APIStatus
}

@observer
class ShareRidePage extends Component<ShareRidePageProps> {
  render() {
    const { onClickShare, t, apiStatus } = this.props
    return (
      <RidePage
        onClick={onClickShare}
        title={t('letsride:shareRide')}
        buttonText={t('letsride:shareLable')}
        seats={t('letsride:noOfSeatsAvailable')}
        quantity={t('letsride:assetQuantity')}
        apiStatus={apiStatus}
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(ShareRidePage)
