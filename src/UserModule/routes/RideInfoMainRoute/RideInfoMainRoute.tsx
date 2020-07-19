import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface RideInfoMainRouteProps extends RouteComponentProps, WithTranslation {}
interface InjectedProps extends RideInfoMainRoute {}

@observer
class RideInfoMainRoute extends Component<RideInfoMainRouteProps> {
  renderSuccessUI = observer(() => {
    return <p>hey..</p>
  })
  render() {
    return (
      <LoadingWrapperWithFailure
        apiStatus={100}
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
