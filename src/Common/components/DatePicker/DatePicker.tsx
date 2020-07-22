import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { observer } from 'mobx-react'
import ReactDatePicker from 'react-datepicker'
import './index.css'
import { observable } from 'mobx'
import { ErrorMsgSpan, Wrapper } from './styledComponents'
import { WithTranslation, withTranslation } from 'react-i18next'
interface DatePickerProps extends WithTranslation {
  placeHolder: string
  minDate?: Date
  selectedDate: object
  handleChange: (date: object) => void
  showError?: boolean
}
@observer
class DatePicker extends Component<DatePickerProps> {
  @observable value
  @observable shouldShowErrorMessage = false
  @observable errorMessage
  static defaultProps = {
    showError: true
  }
  onBlur = () => {
    this.shouldShowErrorMessage = true
    this.errorMessage = this.props.t('common:requiredMsg')
  }
  render() {
    const {
      selectedDate,
      placeHolder,
      minDate,
      handleChange,
      showError
    } = this.props
    return (
      <Wrapper>
        <ReactDatePicker
          onChange={handleChange}
          onBlur={this.onBlur}
          showTimeSelect
          placeholderText={placeHolder}
          minDate={minDate}
          dateFormat='Pp'
          selected={selectedDate}
        />
        <ErrorMsgSpan>
          {this.shouldShowErrorMessage && showError && 'Required'}
        </ErrorMsgSpan>
      </Wrapper>
    )
  }
}

//date formate-----> Wed Jul 29 2020 11:20:34 GMT+0530 (India Standard Time)

// handleChange = date => {
//    console.log(date)
//  }

export default withTranslation('translation', { withRef: true })(DatePicker)
