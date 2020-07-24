import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { DashboardWrapper } from './styledComponents'
import { TabBar } from '../../../../Common/components/TabBar'

interface RidesInfoDashboardProps extends WithTranslation {
  dashboardData: any
}
interface TrailProps {
  data: any
}

@observer
class Trail extends Component<TrailProps> {
  render() {
    const { data } = this.props
    return <p>{data.title}</p>
  }
}
@observer
class RidesInfoDashboard extends Component<RidesInfoDashboardProps> {
  render() {
    const { dashboardData } = this.props

    return (
      <DashboardWrapper>
        <TabBar
          renderedComponent={Trail}
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
