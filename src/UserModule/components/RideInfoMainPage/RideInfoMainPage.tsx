import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from './styledComponents'
import { observer } from 'mobx-react'

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

@observer
class RideInfoMainPage extends Component {
  render() {
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper></PageWrapper>
      </MainPageLayout>
    )
  }
}

export default RideInfoMainPage
