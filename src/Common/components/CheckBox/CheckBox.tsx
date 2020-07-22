import React, { Component } from 'react'
import { Checkbox, CheckBoxWrapper, Label } from './styledComponents'

interface CheckBoxProps {
  handleCheck: (obj: object) => void
  labelTypo: any
  label: string
  isDisable?: boolean
}
class CheckBox extends Component<CheckBoxProps> {
  render() {
    const { handleCheck, labelTypo: LabelTypo, label, isDisable } = this.props
    return (
      <CheckBoxWrapper>
        <Checkbox type='checkbox' onChange={handleCheck} disabled={isDisable} />
        <Label>
          <LabelTypo>{label}</LabelTypo>
        </Label>
      </CheckBoxWrapper>
    )
  }
}

export default CheckBox
