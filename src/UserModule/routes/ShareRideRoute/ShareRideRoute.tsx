import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'

interface ShareRideRouteProps extends RouteComponentProps, WithTranslation {}

class ShareRideRoute extends Component<ShareRideRouteProps> {
  render() {
    return <div>ShareRideRoute</div>
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareRideRoute)
)
