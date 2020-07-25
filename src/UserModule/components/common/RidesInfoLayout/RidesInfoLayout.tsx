import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { RidesInfoLayoutwrapper } from './styledComponents'
import { TableUI } from '../../../../Common/components/Table'
import LoadingWrapperWithFailure from '../../../../Common/components/LoadingWrapperWithFailure'

interface RidesInfoLayoutProps {
  data: any
}

@observer
class RidesInfoLayout extends Component<RidesInfoLayoutProps> {
  renderSuccessUI = observer(() => {
    return <TableUI />
  })
  render() {
    const { data } = this.props
    const {
      getEntitiesListAPIStatus,
      getEntitiesListAPIError,
      entitiesList
    } = data.matchingResults
    console.log(data.matchingResults)

    return (
      <RidesInfoLayoutwrapper>
        <LoadingWrapperWithFailure
          apiStatus={getEntitiesListAPIStatus}
          apiError={getEntitiesListAPIError}
          onRetryClick={() => {}}
          renderSuccessUI={this.renderSuccessUI}
        />
      </RidesInfoLayoutwrapper>
    )
  }
}

export default RidesInfoLayout
