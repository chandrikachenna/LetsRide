import React, { Component } from 'react'
import {
  WithLableWrapper,
  Label,
  Required,
  WithLeftLableWrapper
} from './styledComponents'
import { observer } from 'mobx-react'
interface WithLabelProps {
  labelStyle: Function
  label: string
  isRequired: boolean
  isLeft: boolean
}
class WithLabel extends Component<WithLabelProps> {
  static defaultProps = {
    isLeft: false
  }
  renderUI = () => {
    const { labelStyle: LableStyle, isLeft, label, isRequired } = this.props
    return (
      <Label css={isLeft}>
        <LableStyle>
          {label}
          {isRequired ? <Required>*</Required> : ''}
        </LableStyle>
      </Label>
    )
  }
  render() {
    const { children, isLeft } = this.props
    if (!isLeft) {
      return (
        <WithLableWrapper>
          {this.renderUI()}
          {children}
        </WithLableWrapper>
      )
    }
    return (
      <WithLeftLableWrapper css={isLeft}>
        {this.renderUI()}
        {children}
      </WithLeftLableWrapper>
    )
  }
}

export { WithLabel }
