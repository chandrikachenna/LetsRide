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
import { Select } from '../../../Common/components/Select'

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
  @observable inputRef: React.RefObject<any>
  @observable inputCustom: React.RefObject<any>
  constructor(props) {
    super(props)
    this.inputCustom = React.createRef()
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    this.inputRef.current.focus()
  }

  onchange = (value: string) => {}
  onclick = (value: number) => {}
  handleChange = date => {
    this.date = date
  }
  onSubmit = value => {
    console.log(this.inputRef)
  }
  onChangeToPlace = () => {}
  render() {
    return (
      <MainPageLayout src={imgSrc}>
        {/* <TabBar data={tabsData} /> */}
        <PageWrapper>
          <Card cardStyles={cardStyles}>
            <Input
              placeHolder={'name'}
              onChange={this.onChangeToPlace}
              validateForm={ValidateFullname}
              inputStyles={inputStyles}
              inputRef={this.inputRef}
<<<<<<< HEAD
            ></Input>
            <Select
              onSlectOption={this.onchange}
              options={['1', '2']}
              value={'1'}
            />
=======
            /> */}

            <WithLabel labelStyle={InputLable} label={'HI'} isRequired={true}>
              <Select
                onSlectOption={this.onchange}
                options={['1', '2']}
                value={'1'}
              />
            </WithLabel>
>>>>>>> 10eed134112338d4db93d359263d1d4cd5a785bb
            <Button
              ref={this.inputCustom}
              disabled={false}
              onClick={this.onSubmit}
              text={'string'}
              textTypo={TextTypo}
              buttonStyles={signInButtonStyles}
              loadingStatus={false}
            />
          </Card>
        </PageWrapper>
      </MainPageLayout>
    )
  }
}

export default RideInfoMainPage