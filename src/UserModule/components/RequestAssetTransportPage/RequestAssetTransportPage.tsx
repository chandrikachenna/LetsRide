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
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RequestAssetTransportPageProps extends WithTranslation {
  onClickRequest: (details: object) => void
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
  @observable assetType!: string
  @observable otherAssetType!: string
  @observable isAssetTypeOther!: boolean
  @observable assetSensitivity!: string
  @observable whomToDeliver!: string
  constructor(props) {
    super(props)
    this.init()
  }
  init = () => {
    this.fromPlace = ''
    this.toPlace = ''
    this.isFlexible = false
    this.fromDateTime = {}
    this.toDateTime = {}
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
      isFlexible: this.isFlexible,
      fromDateTime: `${this.fromDateTime}`,
      toDateTime: `${this.toDateTime}`,
      assetType: this.assetType,
      isAssetTypeOther: this.isAssetTypeOther,
      otherAssetType: this.otherAssetType,
      assetSensitivity: this.assetSensitivity,
      whomToDeliver: this.whomToDeliver
    }
    this.props.onClickRequest(rideRequestObject)
  }
  render() {
    const { t, onClickRequest } = this.props
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
          >
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
