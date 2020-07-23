import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import { PageWrapper } from './styledComponents'
import { observer } from 'mobx-react'
import { MenuBar } from '../../../Common/components/MenuBar'

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

@observer
class RideInfoMainPage extends Component {
  onChangeToPlace = () => {}
  render() {
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <MenuBar
            menu={'1'}
            menu1Name={'1'}
            menu2Name={'2'}
            menu3Name={'3'}
            onClickMenu1={this.onChangeToPlace}
            onClickMenu2={this.onChangeToPlace}
            onClickMenu3={this.onChangeToPlace}
          />
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default RideInfoMainPage
