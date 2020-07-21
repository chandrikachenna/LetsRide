import React, { Component } from 'react'
import { buttonType, buttonVariant } from './constants'

import { BaseButton } from './BaseButton'
import { OutlineButton } from './OutlineButton'
import { ovalCss, rectangularCss } from './styledComponents'
export interface ButtonProps {
  variant: string
  type: string
  className?: string
  disabled: boolean
  onClick: () => void
  text: string
  textTypo: Function
  buttonStyles: any
  loadingStatus?: boolean
}
class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: buttonType.filled,
    variant: buttonVariant.oval,
    disabled: false
  }

  static buttonTypes = buttonType
  static buttonVariants = buttonVariant

  getButtonCss = () => {
    const { variant } = this.props
    switch (variant) {
      case buttonVariant.oval:
        return ovalCss
      case buttonVariant.rectangular:
        return rectangularCss
      default:
        console.warn('Invalid Variant')
        return null
    }
  }
  render() {
    const { type, variant, ...otherProps } = this.props
    switch (type) {
      case buttonType.filled:
        return <BaseButton {...this.props} buttonCss={this.getButtonCss()} />
      case buttonType.outline:
        return <OutlineButton {...this.props} buttonCss={this.getButtonCss()} />
      default:
        console.warn('Invalid Type')
        return null
    }
  }
}

export { Button }
