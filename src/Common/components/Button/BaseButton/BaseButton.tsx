import React, { Component } from 'react'
import { ButtonWrapper, override } from './styledComponents'
import { ButtonProps } from '../Button'
import ClipLoader from 'react-spinners/ClipLoader'
export type otherProps = {
  onClick: (value: any) => void
}
export interface BaseButtonProps extends ButtonProps {
  buttonCss: any
}
class BaseButton extends Component<BaseButtonProps> {
  static defaultProps = {
    className: '',
    loadingStatus: false
    // TextTypo: span
  }
  isEnabled = () => {
    const { disabled } = this.props
    return !disabled
  }
  render() {
    const {
      className,
      onClick,
      disabled,
      text,
      textTypo: TextTypo,
      buttonCss,
      buttonStyles,
      loadingStatus
    } = this.props
    console.log(buttonCss)

    let otherProps: otherProps = { onClick: () => {} }
    if (this.isEnabled()) {
      otherProps.onClick = onClick
    }
    return (
      <ButtonWrapper
        className={className}
        css={buttonCss}
        buttonStyles={buttonStyles}
        {...otherProps}
        disabled={disabled}
      >
        {loadingStatus ? (
          <ClipLoader
            css={override}
            size={20}
            color={'white'}
            loading={loadingStatus}
          />
        ) : (
          <TextTypo>{text}</TextTypo>
        )}
      </ButtonWrapper>
    )
  }
}

export { BaseButton }
