import React, { Component } from 'react'
import { MainPageLayout } from '../../../Common/components/MainPageLayout'
import {
  PageWrapper,
  datePickerStyles,
  TextTypo,
  signInButtonStyles,
  inputStyles,
  InputLable,
  cardStyles
} from './styledComponents'
import { observer } from 'mobx-react'
import { DatePicker } from '../../../Common/components/DatePicker'
import { observable } from 'mobx'
import { Button } from '../../../Common/components/Button'
import { Counter } from '../../../Common/components/Counter'
import { Input } from '../../../Common/components/Input'
import { ValidateFullname } from '../../../Common/utils/ValidateFullname'
import { WithLabel } from '../../../Common/components/WithLabel'
import { Card } from '../../../Common/components/Card'
import { TabBar } from '../../../Common/components/TabBar'

const imgSrc =
  'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/c2438b2e-3c57-45cc-a4e7-10c2b3eec159.svg'

function UI() {
  return <p>Tab</p>
}
const tabsData = [
  { component: UI, data: '1' },
  { component: UI, data: '2' }
]
@observer
class RideInfoMainPage extends Component {
  @observable date = new Date()
  onchange = (value: string | number) => {}
  onclick = (value: number) => {}
  handleChange = date => {
    this.date = date
  }
  render() {
    return (
      <MainPageLayout src={imgSrc}>
        {/* <TabBar data={tabsData} /> */}
        <PageWrapper>
          <Card cardStyles={cardStyles}>
            <Button
              disabled={true}
              onClick={() => {}}
              text={'string'}
              textTypo={TextTypo}
              buttonStyles={signInButtonStyles}
              loadingStatus={false}
            />
          </Card>
          {/* <DatePicker
            placeHolder={'Date And Time'}
            minDate={new Date()}
            handleChange={this.handleChange}
            selectedDate={this.date}
            cssStyles={datePickerStyles}
          />

          <WithLabel labelStyle={InputLable} label={'LABEL'} isRequired={true}>
            <Input
              onChange={this.onchange}
              validateForm={ValidateFullname}
              inputStyles={inputStyles}
            />
          </WithLabel>

          <WithLabel
            labelStyle={InputLable}
            label={'LABEL'}
            isRequired={true}
            isLeft={true}
          >
            <Counter
              onIncrement={this.onclick}
              onDecrement={this.onclick}
              count={0}
            />
          </WithLabel> */}
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default RideInfoMainPage
