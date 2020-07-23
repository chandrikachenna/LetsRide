import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from './styledComponents'
import { observer } from 'mobx-react'
import { MenuBar } from '../../../Common/components/MenuBar'
import { withTranslation, WithTranslation } from 'react-i18next'

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RideInfoMainPageProps extends WithTranslation {}

@observer
class RideInfoMainPage extends Component<RideInfoMainPageProps> {
  onChangeToPlace = () => {}
  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <MenuBar
            menu1Name={t('letsride:matchingResults')}
            menu2Name={t('letsride:myRequests')}
            menu3Name={t('letsride:sharedDetails')}
          />
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RideInfoMainPage
)
