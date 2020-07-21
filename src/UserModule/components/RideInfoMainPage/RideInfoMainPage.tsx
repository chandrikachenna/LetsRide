import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import {
  PageWrapper,
  datePickerStyles,
  TextTypo,
  signInButtonStyles
} from './styledComponents'
import { observer } from 'mobx-react'
import { DatePicker } from '../../../Common/components/DatePicker'
import { observable } from 'mobx'
import { Button } from '../../../Common/components/Button'
import { Counter } from '../../../Common/components/Counter'

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

@observer
class RideInfoMainPage extends Component {
  @observable date = new Date()
  onchange = (value: string) => {}
  handleChange = date => {
    this.date = date
  }
  render() {
    return (
      <MainPageLayout src={imgSrc}>
        <PageWrapper>
          <DatePicker
            placeHolder={'Date And Time'}
            minDate={new Date()}
            handleChange={this.handleChange}
            selectedDate={this.date}
            cssStyles={datePickerStyles}
          />
          <Counter onIncrement={() => {}} onDecrement={() => {}} count={0} />
          <Button
            disabled={true}
            onClick={() => {}}
            text={'string'}
            textTypo={TextTypo}
            buttonStyles={signInButtonStyles}
            loadingStatus={false}
          />
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default RideInfoMainPage
