import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { RidePage } from '../common/RidePage'
import {
  getAccessToken,
  clearUserSession
} from '../../../Common/utils/StorageUtils'
interface RequestRidePageProps extends WithTranslation {
  onClickRequest: (details: object) => void
}

@observer
class RequestRidePage extends Component<RequestRidePageProps> {
  render() {
    const { onClickRequest, t } = this.props
    console.log(getAccessToken())

    return (
      <RidePage
        onClick={onClickRequest}
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
