import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { goToHomePage } from '../../utils/NavigationUtils'
import { RequestRidePage } from '../../components/RequestRidePage'

interface RequestRideRouteProps extends RouteComponentProps, WithTranslation {}

class RequestRideRoute extends Component<RequestRideRouteProps> {
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
