import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { RequestAssetTransportPage } from '../../components/RequestAssetTransportPage'
import { goToHomePage } from '../../utils/NavigationUtils'
import { inject, observer } from 'mobx-react'

interface RequestAssetTransportRouteProps
  extends RouteComponentProps,
    WithTranslation {}

@inject('letsRideInfoStore')
@observer
class RequestAssetTransportRoute extends Component<
  RequestAssetTransportRouteProps
> {
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  onClickRequest = details => {
    const { history } = this.props
    goToHomePage(history)
    this.getLetsRideInfoStore().formsInfo.UpdateAsserTransportRequestInfo(
      details
    )
  }
  render() {
    return <RequestAssetTransportPage onClickRequest={this.onClickRequest} />
  }
}
export default withTranslation('translation', { withRef: true })(
  withRouter(RequestAssetTransportRoute)
)
