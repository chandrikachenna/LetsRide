import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { goToHomePage } from '../../utils/NavigationUtils'
import { RequestRidePage } from '../../components/RequestRidePage'
import { observer, inject } from 'mobx-react'
import { API_SUCCESS } from '@ib/api-constants'

interface RequestRideRouteProps extends RouteComponentProps, WithTranslation {}

@inject('letsRideInfoStore')
@observer
class RequestRideRoute extends Component<RequestRideRouteProps> {
  componentDidMount() {}
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  onClickRequest = async details => {
    await this.getLetsRideInfoStore().formsInfo.AddRideRequestInfo(details)
    const { history } = this.props
    goToHomePage(history)
  }
  render() {
    return (
      <RequestRidePage
        onClickRequest={this.onClickRequest}
        apiStatus={
          this.getLetsRideInfoStore().formsInfo.getAddRideRequestAPIStatus
        }
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RequestRideRoute)
)
