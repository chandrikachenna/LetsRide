import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { ShareRidePage } from '../../components/ShareRidePage'

interface ShareRideRouteProps extends RouteComponentProps, WithTranslation {}

class ShareRideRoute extends Component<ShareRideRouteProps> {
  render() {
    return <ShareRidePage />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareRideRoute)
)
