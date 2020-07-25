import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { ShareRidePage } from '../../components/ShareRidePage'
import { goToHomePage } from '../../utils/NavigationUtils'
import { inject, observer } from 'mobx-react'

interface ShareRideRouteProps extends RouteComponentProps, WithTranslation {}
@inject('letsRideInfoStore')
@observer
class ShareRideRoute extends Component<ShareRideRouteProps> {
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  onClickShare = async details => {
    await this.getLetsRideInfoStore().formsInfo.AddShareRideInfo(details)
    const { history } = this.props
    goToHomePage(history)
  }
  render() {
    return (
      <ShareRidePage
        onClickShare={this.onClickShare}
        apiStatus={
          this.getLetsRideInfoStore().formsInfo.getAddShareRideAPIStatus
        }
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(ShareRideRoute)
)
