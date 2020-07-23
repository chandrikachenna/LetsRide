import React, { Component } from 'react'
import './index.css'
import ReactSelect from 'react-select'
import { selectStyles, Wrapper, ErrorMsgSpan } from './styledComponent'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const styles = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #d7dfe9',
    boxShadow: '1px solid #d7dfe9',
    '&:hover': {
      border: '1px solid #d7dfe9'
    }
  })
}
interface SelectProps {
  onSlectOption: (value: string) => void
  options: Array<string>
  value?: string
  isDisabled?: boolean
  isMulti?: boolean
  className?: string
  placeholder?: string
  showError?: boolean
}
@observer
class Select extends Component<SelectProps> {
  @observable shouldShowErrorMessage = false
  @observable selectedValue
  static defaultProps = {
    showError: true
  }
  renderOptions = options => {
    let optionsList = [...options]
    return optionsList.map(option => {
      return { value: option, label: option }
    })
  }
  renderValue = value => {
    if (typeof value !== 'string') {
      return value
    } else {
      return { value: value, label: value }
    }
  }
  onBlur = event => {
    if (this.selectedValue) {
      this.shouldShowErrorMessage = false
    } else {
      this.shouldShowErrorMessage = true
    }
  }
  onChange = event => {
    this.shouldShowErrorMessage = false
    this.selectedValue = event.value
    const { onSlectOption } = this.props
    onSlectOption(event)
  }
  render() {
    const {
      onSlectOption,
      options,
      value,
      isDisabled,
      isMulti,
      className,
      placeholder,
      showError
    } = this.props

    return (
      <Wrapper>
        <ReactSelect
          isDisabled={isDisabled}
          className={className ? className : 'styles-select'}
          css={selectStyles}
          styles={styles}
          options={options.length > 0 ? this.renderOptions(options) : []}
          onChange={this.onChange}
          onBlur={this.onBlur}
          defaultValue={this.renderValue(value)}
          isMulti={isMulti}
          placeholder={placeholder}
        />
        <ErrorMsgSpan>
          {showError && this.shouldShowErrorMessage && 'Required'}
        </ErrorMsgSpan>
      </Wrapper>
    )
  }
}
export { Select }
