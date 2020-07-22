import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { goToShareRidePage } from '../../utils/NavigationUtils'
import { ShareTravelInfoPage } from '../../components/ShareTravelInfoPage'

interface ShareRideRouteProps extends RouteComponentProps, WithTranslation {}

class ShareRideRoute extends Component<ShareRideRouteProps> {
  render() {
    return <ShareTravelInfoPage />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareRideRoute)
)
