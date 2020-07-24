import React, { Component } from 'react'
import { MainPageLayout } from '../../../../Common/components/MainPageLayout'
import { withTranslation, WithTranslation } from 'react-i18next'
import { BasicInfoForm } from '../BasicInfoForm'
import { PageWrapper, LableTypo } from '../../../styledComponents'
import { WithLabel } from '../../../../Common/components/WithLabel'
import { Counter } from '../../../../Common/components/Counter'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { validateFields } from '../../../../Common/utils/validateFields'
import { compareAsc, format } from 'date-fns'
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
  @observable isFlexible: boolean = false
  @observable fromDateTime!: Date
  @observable toDateTime!: Date
  @observable noOfSeats!: number
  @observable laguageQuantity!: number
  @observable isError: boolean = false
  constructor(props) {
    super(props)
    this.noOfSeats = 0
    this.laguageQuantity = 0
    // this.init()
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
    console.log(typeof format(date, 'yyyy-MM-dd HH:mm:ss.ssssss'))
  }
  onSelectToDateTime = date => {
    this.toDateTime = date
  }
  onIncrementSeats = () => {
    this.noOfSeats++
  }
  onDecrementSeats = () => {
    this.noOfSeats > 0 && this.noOfSeats--
  }
  onIncrementlaguageQuantity = () => {
    this.laguageQuantity++
  }
  onDecrementlaguageQuantity = () => {
    this.laguageQuantity > 0 && this.laguageQuantity--
  }
  onClickButton = () => {
    const ridePageInfo = {
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      fromDateTime: format(this.fromDateTime, 'yyyy-MM-dd HH:mm:ss.ssssss')
    }
    this.isError = validateFields(ridePageInfo, this.isError)
    console.log(this.isFlexible)

    ridePageInfo[`isFlexible`] = this.isFlexible
    ridePageInfo[`toDateTime`] = format(
      this.fromDateTime,
      'yyyy-MM-dd HH:mm:ss.ssssss'
    )
    ridePageInfo[`seats`] = this.noOfSeats
    ridePageInfo[`quantity`] = this.laguageQuantity
    if (!this.isError) {
      this.props.onClick(ridePageInfo)
    }
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
            isError={this.isError}
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
