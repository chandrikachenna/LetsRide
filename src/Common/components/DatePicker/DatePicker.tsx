import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { observer } from 'mobx-react'
import ReactDatePicker from 'react-datepicker'

interface DatePickerProps {
  placeHolder: string
  minDate: Date
  selectedDate: object
  handleChange: (date: object) => void
  cssStyles?: any
}
@observer
class DatePicker extends Component<DatePickerProps> {
  render() {
    const { selectedDate, placeHolder, minDate, handleChange } = this.props
    return (
      <ReactDatePicker
        onChange={handleChange}
        showTimeSelect
        placeholderText={placeHolder}
        minDate={minDate}
        dateFormat='Pp'
        selected={selectedDate}
      />
    )
  }
}

//date formate-----> Wed Jul 29 2020 11:20:34 GMT+0530 (India Standard Time)

// handleChange = date => {
//    console.log(date)
//  }
export { DatePicker }
