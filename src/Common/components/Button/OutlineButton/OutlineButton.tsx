import React, { Component } from 'react'
import { OutlineButtonWrapper } from './styledCompoents'
import { ButtonProps } from '../Button'
import { BaseButtonProps } from '../BaseButton/BaseButton'

class OutlineButton extends Component<BaseButtonProps> {
  render() {
    return <OutlineButtonWrapper {...this.props} />
  }
}

export { OutlineButton }
