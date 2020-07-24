import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from './styledComponents'
import { observer } from 'mobx-react'
import { MenuBar } from '../../../Common/components/MenuBar'
import {
  withTranslation,
  WithTranslation,
  initReactI18next
} from 'react-i18next'
import { observable } from 'mobx'
import { menus } from '../../../Common/components/MenuBar/MenuBar'
import { RidesInfoDashboard } from '../common/RidesInfoDashboard'
const renderedMenus = {
  matchingResults: 'matchingResults',
  myRequests: 'myRequests',
  sharedDetails: 'sharedDetails'
}

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RideInfoMainPageProps extends WithTranslation {}

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
    const { t } = this.props
    this.dashboardData = {
      categories: {
        one: {
          title: t('letsride:ride'),
          any: 'any'
        },
        two: {
          title: t('letsride:asset'),
          any: 'any'
        }
      }
    }
  }
  onClickMenu = menu => {
    const { t } = this.props
    switch (menu) {
      case menus.menu1:
        this.renderedInfo = renderedMenus.matchingResults
        this.dashboardData = {
          categories: {
            one: {
              title: t('letsride:ride'),
              any: 'any'
            },
            two: {
              title: t('letsride:asset'),
              any: 'any'
            }
          }
        }
        break
      case menus.menu2:
        this.renderedInfo = renderedMenus.myRequests
        this.dashboardData = {
          categories: {
            one: {
              title: t('letsride:ride'),
              any: 'any'
            },
            two: {
              title: t('letsride:asset'),
              any: 'any'
            }
          }
        }
        break
      case menus.menu3:
        this.renderedInfo = renderedMenus.sharedDetails
        this.dashboardData = {
          categories: {
            one: {
              title: t('letsride:ride'),
              any: 'any'
            },
            two: {
              title: t('letsride:travelInfo'),
              any: 'any'
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
