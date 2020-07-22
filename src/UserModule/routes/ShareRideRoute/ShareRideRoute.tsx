import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { ShareRidePage } from '../../components/ShareRidePage'
import { goToHomePage } from '../../utils/NavigationUtils'

interface ShareRideRouteProps extends RouteComponentProps, WithTranslation {}

class ShareRideRoute extends Component<ShareRideRouteProps> {
  onClickShare = details => {
    //:TODO call store apicall
    const { history } = this.props
    goToHomePage(history)
  }
  render() {
    return <ShareRidePage onClickShare={this.onClickShare} />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareRideRoute)
)
