import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { RideInfoMainPage } from '../../components/RideInfoMainPage'

interface RideInfoMainRouteProps extends RouteComponentProps, WithTranslation {}
interface InjectedProps extends RideInfoMainRouteProps {}

@inject('letsRideInfoStore')
@observer
class RideInfoMainRoute extends Component<RideInfoMainRouteProps> {
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  renderSuccessUI = observer(() => {
    const {
      rideMatchingResultsInfo,
      assetMatchingResultsInfo,
      myRideRequestsInfo,
      myAssetRequestsInfo,
      sharedRideInfo,
      sharedTravelInfo
    } = this.getLetsRideInfoStore()
    return (
      <RideInfoMainPage
        rideMatchingResultsInfo={rideMatchingResultsInfo}
        assetMatchingResultsInfo={assetMatchingResultsInfo}
        myRideRequestsInfo={myRideRequestsInfo}
        myAssetRequestsInfo={myAssetRequestsInfo}
        sharedRideInfo={sharedRideInfo}
        sharedTravelInfo={sharedTravelInfo}
      />
    )
  })
  render() {
    return (
      <LoadingWrapperWithFailure
        apiStatus={200}
        apiError={''}
        onRetryClick={() => {}}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RideInfoMainRoute)
)
