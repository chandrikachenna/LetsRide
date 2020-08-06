import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { MenuBar } from '../../../Common/components/MenuBar'
import { menus } from '../../../Common/components/MenuBar/MenuBar'
import { PaginationStore } from '../../../Common/stores/PaginationStore'

import {
  goToRequstRidePage,
  goToRequstAssetTransportPage,
  goToShareRidePage,
  goToShareTravelInfoPage
} from '../../utils/NavigationUtils'
import {
  RideMatchingTableHeadings,
  AssetMatchingTableHeadings,
  RideRequestTableHeadings,
  AssetRequestTableHeadings,
  SharedRideTableHeadings,
  SharedTravelInfoTableHeadings
} from '../../constants/TableHeadings'

import { RidesInfoDashboard } from '../common/RidesInfoDashboard'

import { PageWrapper } from './styledComponents'

const renderedMenus = {
  matchingResults: 'matchingResults',
  myRequests: 'myRequests',
  sharedDetails: 'sharedDetails'
}

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RideInfoMainPageProps extends WithTranslation {
  rideMatchingResultsInfo: PaginationStore
  assetMatchingResultsInfo: PaginationStore
  myRideRequestsInfo: PaginationStore
  myAssetRequestsInfo: PaginationStore
  sharedRideInfo: PaginationStore
  sharedTravelInfo: PaginationStore
}

@observer
class RideInfoMainPage extends Component<RideInfoMainPageProps> {
  menu: string = menus.menu1
  @observable renderedInfo = renderedMenus.matchingResults
  @observable dashboardData!: any
  constructor(props) {
    super(props)
    this.init()
  }

  init = () => {
    const { t, rideMatchingResultsInfo, assetMatchingResultsInfo } = this.props
    this.dashboardData = {
      categories: {
        one: {
          dashboard: 'matchingResults',
          title: t('letsride:ride'),
          formTitle: t('letsride:addRideRequest'),
          formLink: goToRequstRidePage,
          matchingResults: rideMatchingResultsInfo,
          dashboardHeadings: RideMatchingTableHeadings
        },
        two: {
          dashboard: 'matchingResults',
          title: t('letsride:asset'),
          formTitle: t('letsride:addAssetRequest'),
          formLink: goToRequstAssetTransportPage,
          matchingResults: assetMatchingResultsInfo,
          dashboardHeadings: AssetMatchingTableHeadings
        }
      }
    }
  }
  onClickMenu = menu => {
    const {
      t,
      rideMatchingResultsInfo,
      assetMatchingResultsInfo,
      myRideRequestsInfo,
      myAssetRequestsInfo,
      sharedRideInfo,
      sharedTravelInfo
    } = this.props
    switch (menu) {
      case menus.menu1:
        this.renderedInfo = renderedMenus.matchingResults
        this.dashboardData = {
          categories: {
            one: {
              dashboard: 'matchingResults',
              title: t('letsride:ride'),
              formTitle: t('letsride:addRideRequest'),
              formLink: goToRequstRidePage,
              matchingResults: rideMatchingResultsInfo,
              dashboardHeadings: RideMatchingTableHeadings
            },
            two: {
              dashboard: 'matchingResults',
              title: t('letsride:asset'),
              formTitle: t('letsride:addAssetRequest'),
              formLink: goToRequstAssetTransportPage,
              matchingResults: assetMatchingResultsInfo,
              dashboardHeadings: AssetMatchingTableHeadings
            }
          }
        }
        break
      case menus.menu2:
        this.renderedInfo = renderedMenus.myRequests
        this.dashboardData = {
          categories: {
            one: {
              dashboard: 'myRequests',
              title: t('letsride:ride'),
              formTitle: t('letsride:addRideRequest'),
              formLink: goToRequstRidePage,
              matchingResults: myRideRequestsInfo,
              dashboardHeadings: RideRequestTableHeadings
            },
            two: {
              dashboard: 'myRequests',
              title: t('letsride:asset'),
              formTitle: t('letsride:addAssetRequest'),
              formLink: goToRequstAssetTransportPage,
              matchingResults: myAssetRequestsInfo,
              dashboardHeadings: AssetRequestTableHeadings
            }
          }
        }
        break
      case menus.menu3:
        this.renderedInfo = renderedMenus.sharedDetails
        this.dashboardData = {
          categories: {
            one: {
              dashboard: 'sharedDetails',
              title: t('letsride:ride'),
              formTitle: t('letsride:addShareRide'),
              formLink: goToShareRidePage,
              matchingResults: sharedRideInfo,
              dashboardHeadings: SharedRideTableHeadings
            },
            two: {
              dashboard: 'sharedDetails',
              title: t('letsride:travelInfo'),
              formTitle: t('letsride:addTravelInfo'),
              formLink: goToShareTravelInfoPage,
              matchingResults: sharedTravelInfo,
              dashboardHeadings: SharedTravelInfoTableHeadings
            }
          }
        }
        break
    }
  }
  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <MenuBar
            menu={this.menu}
            menu1Name={t('letsride:matchingResults')}
            menu2Name={t('letsride:myRequests')}
            menu3Name={t('letsride:sharedDetails')}
            onClickMenu={this.onClickMenu}
          />

          {this.renderedInfo === renderedMenus.matchingResults && (
            <RidesInfoDashboard dashboardData={this.dashboardData} />
          )}
          {this.renderedInfo === renderedMenus.myRequests && (
            <RidesInfoDashboard dashboardData={this.dashboardData} />
          )}
          {this.renderedInfo === renderedMenus.sharedDetails && (
            <RidesInfoDashboard dashboardData={this.dashboardData} />
          )}
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RideInfoMainPage
)
