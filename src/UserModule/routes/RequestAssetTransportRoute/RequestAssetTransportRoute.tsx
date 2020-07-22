import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { RequestAssetTransportPage } from '../../components/RequestAssetTransportPage'
import { goToHomePage } from '../../utils/NavigationUtils'

interface RequestAssetTransportRouteProps
  extends RouteComponentProps,
    WithTranslation {}

class RequestAssetTransportRoute extends Component<
  RequestAssetTransportRouteProps
> {
  onClickRequest = details => {
    //:TODO call store apicall
    const { history } = this.props
    goToHomePage(history)
  }
  render() {
    return <RequestAssetTransportPage onClickRequest={this.onClickRequest} />
  }
}
export default withTranslation('translation', { withRef: true })(
  withRouter(RequestAssetTransportRoute)
)
