import React, { Component } from 'react'
import { Input, styles } from './styledComponents'

interface DateTimeProps {
  //   minDate: string
  //   maxDate?: string
  //   dateTime: string
  //   onChangeDateTime: (value: string) => void
}
class DateTime extends Component<DateTimeProps> {
  onChange = event => {
    console.log(typeof event.target.value)
  }
  render() {
    // const { minDate, maxDate, dateTime } = this.props
    return (
      <Input
        type='datetime-local'
        // value={dateTime}
        onChange={this.onChange}
        // min={minDate}
        // max={maxDate}
        placeholder={'Date and Time'}
        style={{ width: '20%' }}
      />
    )
  }
}

{
  /* <Input
        type='datetime-local'
        value='2018-06-12T19:30'
        min='2018-06-07T00:00'
        max='2018-06-14T00:00'
        style={{ width: '20%' }}
      /> */
}

export default DateTime
