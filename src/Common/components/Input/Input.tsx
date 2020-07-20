import React, { Component } from 'react'

import {
  InputElement,
  InputElementWrapper,
  ErrorMsgSpan
} from './styledComponent'

import { observer } from 'mobx-react'

import { observable } from 'mobx'
import { WithTranslation, withTranslation } from 'react-i18next'
export interface validateFormReturnType {
  shouldShowErrorMessage: boolean
  errorMessage: string
}

interface InputProps extends WithTranslation {
  testid?: string
  onChange: (value: string) => void
  placeHolder?: string
  className?: string
  onBlur?: (value: string) => void
  validateForm: (value: string) => validateFormReturnType
}
@observer
class Input extends Component<InputProps> {
  @observable value
  @observable shouldShowErrorMessage
  @observable errorMessage
  static defaultProps = {
    onChange: () => {}
  }
  onChange = event => {
    this.value = event.target.value
    const isEmpty = this.value ? false : true
    if (isEmpty) {
      this.shouldShowErrorMessage = true
      this.errorMessage = this.props.t('common:required')
    } else {
      this.shouldShowErrorMessage = false
      this.errorMessage = ''
    }
    this.props.onChange(this.value)
  }
  onBlur = event => {
    const { shouldShowErrorMessage, errorMessage } = this.props.validateForm(
      this.value
    )
    this.shouldShowErrorMessage = shouldShowErrorMessage
    this.errorMessage = errorMessage
  }
  render() {
    const { testid, placeHolder, className } = this.props
    return (
      <InputElementWrapper>
        <InputElement
          value={this.value}
          onChange={this.onChange}
          placeholder={placeHolder}
          className={className}
          data-testid={testid}
          onBlur={this.onBlur}
        ></InputElement>
        {this.shouldShowErrorMessage && (
          <ErrorMsgSpan>{this.errorMessage}</ErrorMsgSpan>
        )}
      </InputElementWrapper>
    )
  }
}
export default withTranslation('translation', { withRef: true })(Input)
