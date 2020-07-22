import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'

interface RequestRideRouteProps extends RouteComponentProps, WithTranslation {}

class RequestRideRoute extends Component<RequestRideRouteProps> {
  render() {
    return <div>Request Ride</div>
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RequestRideRoute)
)
