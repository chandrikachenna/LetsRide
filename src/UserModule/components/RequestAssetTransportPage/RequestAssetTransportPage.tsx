import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

class RequestAssetTransportPage extends Component {
  render() {
    return (
      <MainPageLayout src={imgSrc}>
        <p>request RequestAssetTransport</p>
      </MainPageLayout>
    )
  }
}

export { RequestAssetTransportPage }
