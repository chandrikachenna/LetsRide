import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { RequestRidePage } from '../../components/RequestRidePage'

interface RequestRideRouteProps extends RouteComponentProps, WithTranslation {}

class RequestRideRoute extends Component<RequestRideRouteProps> {
  render() {
    return <RequestRidePage />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RequestRideRoute)
)
