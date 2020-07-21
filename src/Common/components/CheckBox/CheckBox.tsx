import React, { Component } from 'react'
import { Checkbox, CheckBoxWrapper } from './styledComponents'

interface CheckBoxProps {
  value: string
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
  labelTypo: any
  label: string
  isDisable?: boolean
}
class CheckBox extends Component<CheckBoxProps> {
  render() {
    const {
      value,
      handleCheck,
      labelTypo: LabelTypo,
      label,
      isDisable
    } = this.props
    return (
      <CheckBoxWrapper>
        <Checkbox
          type='checkbox'
          value={value}
          onChange={handleCheck}
          disabled={isDisable}
        />
        <LabelTypo>{label}</LabelTypo>
      </CheckBoxWrapper>
    )
  }
}

export default CheckBox
