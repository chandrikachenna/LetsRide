import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'

interface RequestAssetTransportRouteProps
  extends RouteComponentProps,
    WithTranslation {}

class RequestAssetTransportRoute extends Component<
  RequestAssetTransportRouteProps
> {
  render() {
    return <div>RequestAssetTransport</div>
  }
}
export default withTranslation('translation', { withRef: true })(
  withRouter(RequestAssetTransportRoute)
)
