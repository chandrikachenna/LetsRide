import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { withTranslation, WithTranslation } from 'react-i18next'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { PageWrapper, LableTypo } from './styledCompoents'
import { WithLabel } from '../../../Common/components/WithLabel'
import { Counter } from '../../../Common/components/Counter'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RequestRidePageProps extends WithTranslation {}
class RequestRidePage extends Component<RequestRidePageProps> {
  onclick = (value: number) => {}
  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <BasicInfoForm
            formTitle={t('letsride:rideRequest')}
            buttonText={t('letsride:requestLable')}
          >
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:noOfSeats')}
              isRequired={true}
              isLeft={true}
            >
              <Counter
                onIncrement={this.onclick}
                onDecrement={this.onclick}
                count={0}
              />
            </WithLabel>
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:laguageQuantity')}
              isRequired={true}
              isLeft={true}
            >
              <Counter
                onIncrement={this.onclick}
                onDecrement={this.onclick}
                count={0}
              />
            </WithLabel>
          </BasicInfoForm>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RequestRidePage
)
