import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { RideInfoMainPage } from '../../components/RideInfoMainPage'

interface RideInfoMainRouteProps extends RouteComponentProps, WithTranslation {}
interface InjectedProps extends RideInfoMainRoute {}

@observer
class RideInfoMainRoute extends Component<RideInfoMainRouteProps> {
  renderSuccessUI = observer(() => {
    return <RideInfoMainPage />
  })
  render() {
    return (
      <LoadingWrapperWithFailure
        apiStatus={200}
        apiError={''}
        onRetryClick={() => {}}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  withRouter(RideInfoMainRoute)
)
