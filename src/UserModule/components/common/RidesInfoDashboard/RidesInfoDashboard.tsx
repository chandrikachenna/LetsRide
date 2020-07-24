import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { DashboardWrapper } from './styledComponents'
import { TabBar } from '../../../../Common/components/TabBar'
import { RidesInfoLayout } from '../RidesInfoLayout'

interface RidesInfoDashboardProps extends WithTranslation {
  dashboardData: any
}
@observer
class RidesInfoDashboard extends Component<RidesInfoDashboardProps> {
  render() {
    const { dashboardData } = this.props

    return (
      <DashboardWrapper>
        <TabBar
          renderedComponent={RidesInfoLayout}
          dataForComponentOne={dashboardData.categories.one}
          dataForComponentTwo={dashboardData.categories.two}
        />
      </DashboardWrapper>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RidesInfoDashboard
)
