import React, { Component } from 'react'
import { MainPageLayout } from '../../../../Common/components/MainPageLayout'
import { withTranslation, WithTranslation } from 'react-i18next'
import { BasicInfoForm } from '../BasicInfoForm'
import { PageWrapper, LableTypo } from '../../../styledComponents'
import { WithLabel } from '../../../../Common/components/WithLabel'
import { Counter } from '../../../../Common/components/Counter'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RidePageProps extends WithTranslation {
  onClick: (details: object) => void
  title: string
  buttonText: string
  seats: string
  quantity: string
}
@observer
class RidePage extends Component<RidePageProps> {
  @observable fromPlace!: string
  @observable toPlace!: string
  @observable isFlexible!: boolean
  @observable fromDateTime!: object
  @observable toDateTime!: object
  @observable noOfSeats!: number
  @observable laguageQuantity!: number

  constructor(props) {
    super(props)
    this.init()
  }
  init = () => {
    this.fromPlace = ''
    this.toPlace = ''
    this.isFlexible = false
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
  onIncrementSeats = () => {
    this.noOfSeats++
  }
  onDecrementSeats = () => {
    this.noOfSeats--
  }
  onIncrementlaguageQuantity = () => {
    this.laguageQuantity++
  }
  onDecrementlaguageQuantity = () => {
    this.laguageQuantity--
  }
  onClickButton = () => {
    const ridePageInfo = {
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      isFlexible: this.isFlexible,
      fromDateTime: `${this.fromDateTime}`,
      toDateTime: `${this.toDateTime}`,
      seats: this.noOfSeats,
      quantity: this.laguageQuantity
    }
    this.props.onClick(ridePageInfo)
  }

  render() {
    const { t, title, buttonText, seats, quantity } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <BasicInfoForm
            formTitle={title}
            buttonText={buttonText}
            isFlexible={this.isFlexible}
            fromDateTime={this.fromDateTime}
            toDateTime={this.toDateTime}
            onChangeFromPlace={this.onChangeFromPlace}
            onChangeToPlace={this.onChangeToPlace}
            handleIsFlexible={this.handleIsFlexible}
            onSelectFromDateTime={this.onSelectFromDateTime}
            onSelectToDateTime={this.onSelectToDateTime}
            onClick={this.onClickButton}
          >
            <WithLabel
              labelStyle={LableTypo}
              label={t(`letsride:${seats}`)}
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
              label={t(`letsride:${quantity}`)}
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

export default withTranslation('translation', { withRef: true })(RidePage)
