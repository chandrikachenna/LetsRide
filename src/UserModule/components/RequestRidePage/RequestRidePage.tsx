import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { withTranslation, WithTranslation } from 'react-i18next'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { PageWrapper, LableTypo } from '../../styledComponents'
import { WithLabel } from '../../../Common/components/WithLabel'
import { Counter } from '../../../Common/components/Counter'
import { observable, values } from 'mobx'
import { observer } from 'mobx-react'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RequestRidePageProps extends WithTranslation {}
@observer
class RequestRidePage extends Component<RequestRidePageProps> {
  @observable fromPlace
  @observable toPlace
  @observable isFlexible
  @observable fromDateTime
  @observable toDateTime

  @observable noOfSeats: number
  @observable laguageQuantity: number
  constructor(props) {
    super(props)
    this.noOfSeats = 0
    this.laguageQuantity = 0
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
  onIncrementSeats = (value: number) => {
    this.noOfSeats = value
  }
  onDecrementSeats = (value: number) => {
    this.noOfSeats = value
  }
  onIncrementlaguageQuantity = (value: number) => {
    this.laguageQuantity = value
  }
  onDecrementlaguageQuantity = (value: number) => {
    this.laguageQuantity = value
  }

  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <BasicInfoForm
            formTitle={t('letsride:rideRequest')}
            buttonText={t('letsride:requestLable')}
            isFlexible={this.isFlexible}
            fromDateTime={this.fromDateTime}
            toDateTime={this.toDateTime}
            onChangeFromPlace={this.onChangeFromPlace}
            onChangeToPlace={this.onChangeToPlace}
            handleIsFlexible={this.handleIsFlexible}
            onSelectFromDateTime={this.onSelectFromDateTime}
            onSelectToDateTime={this.onSelectToDateTime}
          >
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:noOfSeats')}
              isRequired={true}
              isLeft={true}
            >
              <Counter
                onIncrement={this.onIncrementSeats}
                onDecrement={this.onDecrementSeats}
                count={this.noOfSeats}
              />
            </WithLabel>
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:laguageQuantity')}
              isRequired={true}
              isLeft={true}
            >
              <Counter
                onIncrement={this.onIncrementlaguageQuantity}
                onDecrement={this.onDecrementlaguageQuantity}
                count={this.laguageQuantity}
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
