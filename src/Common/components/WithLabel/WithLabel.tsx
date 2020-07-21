import React, { Component } from 'react'
import { WithLableWrapper, Label } from './styledComponents'
interface WithLabelProps {
  labelStyle: Function
  label: string
}
class WithLabel extends Component<WithLabelProps> {
  render() {
    const { children, labelStyle: LableStyle, label } = this.props
    return (
      <WithLableWrapper>
        <Label>
          <LableStyle>{label}</LableStyle>
        </Label>
        {children}
      </WithLableWrapper>
    )
  }
}

export { WithLabel }
