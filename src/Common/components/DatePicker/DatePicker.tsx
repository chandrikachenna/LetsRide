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
  isError?: boolean
}
@observer
class DatePicker extends Component<DatePickerProps> {
  @observable shouldShowErrorMessage = false
  @observable errorMessage
  static defaultProps = {
    showError: true
  }
  onBlur = () => {
    const { selectedDate } = this.props
    if (!selectedDate) {
      this.shouldShowErrorMessage = true
      this.errorMessage = this.props.t('common:requiredMsg')
    } else {
      this.shouldShowErrorMessage = false
      this.errorMessage = ''
    }
  }
  handleChange = date => {
    this.props.handleChange(date)
    this.shouldShowErrorMessage = false
  }
  render() {
    const {
      selectedDate,
      placeHolder,
      minDate,
      showError,
      isError
    } = this.props
    return (
      <Wrapper>
        <ReactDatePicker
          onChange={this.handleChange}
          onBlur={this.onBlur}
          showTimeSelect
          placeholderText={placeHolder}
          minDate={minDate}
          dateFormat='Pp'
          selected={selectedDate}
        />
        <ErrorMsgSpan>
          {isError
            ? !selectedDate && 'Required'
            : this.shouldShowErrorMessage && showError && this.errorMessage}
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
