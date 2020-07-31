import React, { Component } from 'react'
import { Checkbox, CheckBoxWrapper, Label } from './styledComponents'

interface CheckBoxProps {
  handleCheck: (obj: object) => void
  labelTypo?: any
  label?: string
  isDisable?: boolean
  isChecked?: boolean
  isLabled?: boolean
}
class CheckBox extends Component<CheckBoxProps> {
  static defaultProps = {
    labelTypo: 'p',
    label: null,
    isChecked: false,
    isLabled: true
  }
  render() {
    const {
      handleCheck,
      labelTypo: LabelTypo,
      label,
      isDisable,
      isChecked,
      isLabled
    } = this.props
    return (
      <CheckBoxWrapper>
        <Checkbox
          type='checkbox'
          onChange={handleCheck}
          disabled={isDisable}
          checked={isChecked}
        />
        {isLabled && (
          <Label>
            <LabelTypo>{label}</LabelTypo>
          </Label>
        )}
      </CheckBoxWrapper>
    )
  }
}

export default CheckBox
