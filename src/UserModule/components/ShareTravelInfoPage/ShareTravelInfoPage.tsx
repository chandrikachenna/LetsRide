import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from '../../styledComponents'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { observable } from 'mobx'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'
interface ShareTravelInfoPageProps extends WithTranslation {}
class ShareTravelInfoPage extends Component<ShareTravelInfoPageProps> {
  @observable fromPlace
  @observable toPlace
  @observable isFlexible
  @observable fromDateTime
  @observable toDateTime
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
  render() {
    const { t } = this.props
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          {/* <BasicInfoForm
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
          ></BasicInfoForm> */}
          <p>kj</p>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  ShareTravelInfoPage
)
