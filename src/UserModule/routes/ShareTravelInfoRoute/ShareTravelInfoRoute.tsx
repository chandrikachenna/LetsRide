import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { ShareTravelInfoPage } from '../../components/ShareTravelInfoPage'
import { goToHomePage } from '../../utils/NavigationUtils'
import { inject, observer } from 'mobx-react'
interface ShareTravelInfoRouteProps
  extends RouteComponentProps,
    WithTranslation {}
@inject('letsRideInfoStore')
@observer
class ShareTravelInfoRoute extends Component<ShareTravelInfoRouteProps> {
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  onClickShare = details => {
    const { history } = this.props
    goToHomePage(history)
    this.getLetsRideInfoStore().formsInfo.UpdateShareTravelInfo(details)
  }
  render() {
    return <ShareTravelInfoPage onClickShare={this.onClickShare} />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareTravelInfoRoute)
)
