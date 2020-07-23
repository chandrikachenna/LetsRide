import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { goToHomePage } from '../../utils/NavigationUtils'
import { RequestRidePage } from '../../components/RequestRidePage'
import { observer, inject } from 'mobx-react'

interface RequestRideRouteProps extends RouteComponentProps, WithTranslation {}

@inject('letsRideInfoStore')
@observer
class RequestRideRoute extends Component<RequestRideRouteProps> {
  getLetsRideInfoStore = () => {
    return this.props['letsRideInfoStore']
  }
  onClickRequest = details => {
    //:TODO call store apicall
    const { history } = this.props
    goToHomePage(history)
  }
  render() {
    return <RequestRidePage onClickRequest={this.onClickRequest} />
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RequestRideRoute)
)
