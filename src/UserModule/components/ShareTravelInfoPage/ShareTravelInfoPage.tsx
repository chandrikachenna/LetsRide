import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from '../../styledComponents'
import { BasicInfoForm } from '../common/BasicInfoForm'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'
interface ShareTravelInfoPageProps extends WithTranslation {}
class ShareTravelInfoPage extends Component<ShareTravelInfoPageProps> {
  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <BasicInfoForm
            formTitle={t('letsride:shareTravelInfo')}
            buttonText={t('letsride:shareLable')}
          ></BasicInfoForm>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  ShareTravelInfoPage
)
