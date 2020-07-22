import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { RequestAssetTransportPage } from '../../components/RequestAssetTransportPage'

interface RequestAssetTransportRouteProps
  extends RouteComponentProps,
    WithTranslation {}

class RequestAssetTransportRoute extends Component<
  RequestAssetTransportRouteProps
> {
  render() {
    return <RequestAssetTransportPage />
  }
}
export default withTranslation('translation', { withRef: true })(
  withRouter(RequestAssetTransportRoute)
)
