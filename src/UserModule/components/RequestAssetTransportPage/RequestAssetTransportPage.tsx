import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { WithTranslation, withTranslation } from 'react-i18next'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { PageWrapper, LableTypo } from '../../styledComponents'
import { observable, values } from 'mobx'
import { observer } from 'mobx-react'
import { WithLabel } from '../../../Common/components/WithLabel'
import { Select } from '../../../Common/components/Select'
import Input from '../../../Common/components/Input/Input'
import { ValidateFullname } from '../../../Common/utils/ValidateFullname'
import { inputStyles } from '../common/BasicInfoForm/styledComponents'
import { Counter } from '../../../Common/components/Counter'
import { validateFields } from '../../../Common/utils/validateFields'
import { APIStatus } from '@ib/api-constants'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RequestAssetTransportPageProps extends WithTranslation {
  onClickRequest: (details: object) => void
  apiStatus: APIStatus
}
@observer
class RequestAssetTransportPage extends Component<
  RequestAssetTransportPageProps
> {
  @observable fromPlace!: string
  @observable toPlace!: string
  @observable isFlexible!: boolean
  @observable fromDateTime!: object
  @observable toDateTime!: Object
  @observable noOfAssests!: number
  @observable assetType!: string
  @observable otherAssetType!: string
  @observable isAssetTypeOther!: boolean
  @observable assetSensitivity!: string
  @observable whomToDeliver!: string
  @observable isError: boolean = false
  constructor(props) {
    super(props)
    this.noOfAssests = 0
    // this.init()
  }
  init = () => {
    this.fromPlace = ''
    this.toPlace = ''
    this.isFlexible = false
    this.noOfAssests = 0
    this.assetType = ''
    this.otherAssetType = ''
    this.isAssetTypeOther = false
    this.assetSensitivity = ''
    this.whomToDeliver = ''
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
  onIncrementAssestNo = () => {
    this.noOfAssests++
  }
  onDecrementAssestNo = () => {
    this.noOfAssests > 0 && this.noOfAssests--
  }
  handleAssetType = event => {
    this.assetType = event.value
    if (this.assetType === 'Others') {
      this.isAssetTypeOther = true
    } else {
      this.isAssetTypeOther = false
    }
  }
  handleOtherAssetType = value => {
    this.otherAssetType = value
  }
  handleSensitivity = event => {
    this.assetSensitivity = event.value
  }
  onChangewhomToDeliver = value => {
    this.whomToDeliver = value
  }
  onClick = () => {
    const rideRequestObject = {
      fromPlace: this.fromPlace,
      toPlace: this.toPlace,
      fromDateTime: `${this.fromDateTime}`,
      assetType: this.assetType,
      assetSensitivity: this.assetSensitivity,
      whomToDeliver: this.whomToDeliver
    }
    this.isError = validateFields(rideRequestObject, this.isError)
    rideRequestObject[`isFlexible`] = this.isFlexible
    rideRequestObject[`toDateTime`] = `${this.toDateTime}`
    rideRequestObject[`noOfAssests`] = `${this.noOfAssests}`
    rideRequestObject[`isAssetTypeOther`] = `${this.isAssetTypeOther}`
    rideRequestObject[`otherAssetType`] = `${this.otherAssetType}`
    if (!this.isError) {
      this.props.onClickRequest(rideRequestObject)
    }
  }
  render() {
    const { t, onClickRequest, apiStatus } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <BasicInfoForm
            formTitle={t('letsride:assetTransportRequest')}
            buttonText={t('letsride:requestLable')}
            isFlexible={this.isFlexible}
            fromDateTime={this.fromDateTime}
            toDateTime={this.toDateTime}
            onChangeFromPlace={this.onChangeFromPlace}
            onChangeToPlace={this.onChangeToPlace}
            handleIsFlexible={this.handleIsFlexible}
            onSelectFromDateTime={this.onSelectFromDateTime}
            onSelectToDateTime={this.onSelectToDateTime}
            onClick={this.onClick}
            isError={this.isError}
            apiStatus={apiStatus}
          >
            <WithLabel
              labelStyle={LableTypo}
              label={t(`letsride:noOfAssets`)}
              isRequired={true}
              isLeft={true}
            >
              <Counter
                onIncrement={this.onIncrementAssestNo}
                onDecrement={this.onDecrementAssestNo}
                count={this.noOfAssests}
              />
            </WithLabel>
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:assetType')}
              isRequired={true}
            >
              <Select
                placeholder={t('letsride:selectAssetType')}
                onSlectOption={this.handleAssetType}
                options={[
                  t('letsride:parcel'),
                  t('letsride:bags'),
                  t('letsride:others')
                ]}
                isError={this.isError}
              />
            </WithLabel>
            {this.isAssetTypeOther && (
              <WithLabel
                labelStyle={LableTypo}
                label={t('letsride:assetTypeOther')}
                isRequired={false}
              >
                <Input
                  placeHolder={t('letsride:otherAssets')}
                  onChange={this.handleOtherAssetType}
                  validateForm={ValidateFullname}
                  inputStyles={inputStyles}
                  showMsg={false}
                  isError={this.isError}
                />
              </WithLabel>
            )}
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:assetSensitivity')}
              isRequired={true}
            >
              <Select
                onSlectOption={this.handleSensitivity}
                options={[
                  t('letsride:higlySensitive'),
                  t('letsride:sensitive'),
                  t('letsride:normal')
                ]}
                placeholder={t('letsride:selectSensitivity')}
                isError={this.isError}
              />
            </WithLabel>
            <WithLabel
              labelStyle={LableTypo}
              label={t('letsride:whomToDeliver')}
              isRequired={true}
            >
              <Input
                placeHolder={t('letsride:nameAndMobileNumber')}
                onChange={this.onChangewhomToDeliver}
                validateForm={ValidateFullname}
                inputStyles={inputStyles}
                isError={this.isError}
              />
            </WithLabel>
          </BasicInfoForm>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RequestAssetTransportPage
)
