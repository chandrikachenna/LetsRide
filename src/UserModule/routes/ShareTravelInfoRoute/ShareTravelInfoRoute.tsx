import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { ShareTravelInfoPage } from '../../components/ShareTravelInfoPage'
interface ShareTravelInfoRouteProps
  extends RouteComponentProps,
    WithTranslation {}

class ShareTravelInfoRoute extends Component<ShareTravelInfoRouteProps> {
  render() {
    return <ShareTravelInfoPage />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareTravelInfoRoute)
)
