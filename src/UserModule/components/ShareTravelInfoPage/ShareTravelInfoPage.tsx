import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper, LableTypo } from '../../styledComponents'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { WithLabel } from '../../../Common/components/WithLabel'
import { Counter } from '../../../Common/components/Counter'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'
interface ShareTravelInfoPageProps extends WithTranslation {
  onClickShare: (details: object) => void
}

@observer
class ShareTravelInfoPage extends Component<ShareTravelInfoPageProps> {
  @observable fromPlace
  @observable toPlace
  @observable isFlexible
  @observable fromDateTime
  @observable toDateTime
  @observable assetQuantity = 0
  onChangeFromPlace = value => {
    this.fromPlace = value
  }
  onChangeToPlace = value => {
    this.toPlace = value
  }
  handleIsFlexible = event => {
    console.log('check')

    this.isFlexible = event.target.checked
  }
  onSelectFromDateTime = date => {
    this.fromDateTime = date
  }
  onSelectToDateTime = date => {
    this.toDateTime = date
  }
  onIncrementAssetQuantity = () => {
    this.assetQuantity++
  }
  onDecrementAssetQuantity = () => {
    this.assetQuantity--
  }
  onClick = () => {
    this.props.onClickShare({})
  }
  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <BasicInfoForm
            formTitle={t('letsride:shareTravelInfo')}
            buttonText={t('letsride:shareLable')}
            isFlexible={this.isFlexible}
            fromDateTime={this.fromDateTime}
            toDateTime={this.toDateTime}
            onChangeFromPlace={this.onChangeFromPlace}
            onChangeToPlace={this.onChangeToPlace}
            handleIsFlexible={this.handleIsFlexible}
            onSelectFromDateTime={this.onSelectFromDateTime}
            onSelectToDateTime={this.onSelectToDateTime}
            onClick={this.onClick}
          >
            <WithLabel
              labelStyle={LableTypo}
              label={t(`letsride:assetQuantity`)}
              isRequired={true}
              isLeft={true}
            >
              <Counter
                onIncrement={this.onIncrementAssetQuantity}
                onDecrement={this.onDecrementAssetQuantity}
                count={this.assetQuantity}
              />
            </WithLabel>
          </BasicInfoForm>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  ShareTravelInfoPage
)
