import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper, LableTypo } from '../../styledComponents'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { WithLabel } from '../../../Common/components/WithLabel'
import { Counter } from '../../../Common/components/Counter'
import { Select } from '../../../Common/components/Select'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'
interface ShareTravelInfoPageProps extends WithTranslation {
  onClickShare: (details: object) => void
}

@observer
class ShareTravelInfoPage extends Component<ShareTravelInfoPageProps> {
  @observable fromPlace!: string
  @observable toPlace!: string
  @observable isFlexible!: boolean
  @observable fromDateTime!: object
  @observable toDateTime!: Object
  @observable travelMedium!: string
  @observable assetQuantity!: number
  constructor(props) {
    super(props)
    this.init()
  }
  init = () => {
    this.fromPlace = ''
    this.toPlace = ''
    this.isFlexible = false
    this.travelMedium = ''
    this.assetQuantity = 0
  }
  onChangeFromPlace = value => {
    this.fromPlace = value
  }
  onChangeToPlace = value => {
    this.toPlace = value
  }
  handleIsFlexible = event => {
    this.isFlexible = event.target.checked
  }
  onSelectFromDateTime = date => {
    this.fromDateTime = date
  }
  onSelectToDateTime = date => {
    this.toDateTime = date
  }
  handleTravelMedium = event => {
    this.travelMedium = event.value
  }
  onIncrementAssetQuantity = () => {
    this.assetQuantity++
  }
  onDecrementAssetQuantity = () => {
    this.assetQuantity--
  }
  onClick = () => {
    const travelInfo = {
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      isFlexible: this.isFlexible,
      fromDateTime: `${this.fromDateTime}`,
      toDateTime: `${this.toDateTime}`,
      travelMedium: this.travelMedium,
      assetQuantity: this.assetQuantity
    }
    this.props.onClickShare(travelInfo)
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
              label={t('letsride:travelMedium')}
              isRequired={true}
            >
              <Select
                placeholder={t('letsride:selectMedium')}
                onSlectOption={this.handleTravelMedium}
                options={[
                  t('letsride:bus'),
                  t('letsride:car'),
                  t('letsride:flight')
                ]}
              />
            </WithLabel>
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