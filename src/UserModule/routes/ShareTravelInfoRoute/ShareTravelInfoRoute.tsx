import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
interface ShareTravelInfoRouteProps
  extends RouteComponentProps,
    WithTranslation {}

class ShareTravelInfoRoute extends Component<ShareTravelInfoRouteProps> {
  render() {
    return <div>ShareTravelInfoRoute</div>
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareTravelInfoRoute)
)
