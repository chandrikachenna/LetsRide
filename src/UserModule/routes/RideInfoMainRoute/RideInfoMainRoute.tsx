import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { RideInfoMainPage } from '../../components/RideInfoMainPage'

interface RideInfoMainRouteProps extends RouteComponentProps, WithTranslation {}
interface InjectedProps extends RideInfoMainRoute {
  letsRideInfoStore
}

@inject('letsRideInfoStore')
@observer
class RideInfoMainRoute extends Component<RideInfoMainRouteProps> {
  componentDidMount = () => {
    if (
      this.getLetsRideInfoStore().rideRideMatchingResultsInfo.entitiesList
        .length > 0
    ) {
      this.getLetsRideInfoStore().rideRideMatchingResultsInfo.getEntities({
        filter_by: 'All'
      })
    }
    console.log(
      this.getLetsRideInfoStore().rideRideMatchingResultsInfo.entitiesList
    )
  }
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  renderSuccessUI = observer(() => {
    return <RideInfoMainPage />
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
