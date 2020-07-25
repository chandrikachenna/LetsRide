import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { RidePage } from '../common/RidePage'
import {
  getAccessToken,
  clearUserSession
} from '../../../Common/utils/StorageUtils'
import { APIStatus } from '@ib/api-constants'
interface RequestRidePageProps extends WithTranslation {
  onClickRequest: (details: object) => void
  apiStatus: APIStatus
}

@observer
class RequestRidePage extends Component<RequestRidePageProps> {
  render() {
    const { onClickRequest, t, apiStatus } = this.props
    console.log(getAccessToken())

    return (
      <RidePage
        onClick={onClickRequest}
        apiStatus={apiStatus}
        title={t('letsride:rideRequest')}
        buttonText={t('letsride:requestLable')}
        seats={t('letsride:noOfSeats')}
        quantity={t('letsride:laguageQuantity')}
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RequestRidePage
)
