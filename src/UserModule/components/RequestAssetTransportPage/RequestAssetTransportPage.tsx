import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { WithTranslation, withTranslation } from 'react-i18next'
import { BasicInfoForm } from '../common/BasicInfoForm'
import { PageWrapper } from '../../styledComponents'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

interface RequestAssetTransportPageProps extends WithTranslation {
  onClickRequest: (details: object) => void
}
@observer
class RequestAssetTransportPage extends Component<
  RequestAssetTransportPageProps
> {
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
  onClick = () => {
    this.props.onClickRequest({})
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
          ></BasicInfoForm>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default withTranslation('translation', { withRef: true })(
  RequestAssetTransportPage
)
