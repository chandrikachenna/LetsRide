import React, { Component } from 'react'
import { WithLableWrapper, Label, Required } from './styledComponents'
interface WithLabelProps {
  labelStyle: Function
  label: string
  isRequired: boolean
}
class WithLabel extends Component<WithLabelProps> {
  render() {
    const { children, labelStyle: LableStyle, label, isRequired } = this.props
    return (
      <WithLableWrapper>
        <Label>
          <LableStyle>
            {label}
            {isRequired ? <Required>*</Required> : ''}
          </LableStyle>
        </Label>
        {children}
      </WithLableWrapper>
    )
  }
}

export { WithLabel }
