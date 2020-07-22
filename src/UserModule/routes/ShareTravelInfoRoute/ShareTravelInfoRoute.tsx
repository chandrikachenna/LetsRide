import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { ShareTravelInfoPage } from '../../components/ShareTravelInfoPage'
import { goToHomePage } from '../../utils/NavigationUtils'
interface ShareTravelInfoRouteProps
  extends RouteComponentProps,
    WithTranslation {}

class ShareTravelInfoRoute extends Component<ShareTravelInfoRouteProps> {
  onClickShare = details => {
    //:TODO call store apicall
    const { history } = this.props
    goToHomePage(history)
  }
  render() {
    return <ShareTravelInfoPage onClickShare={this.onClickShare} />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareTravelInfoRoute)
)
