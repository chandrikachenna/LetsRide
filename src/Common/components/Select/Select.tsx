import React, { Component } from 'react'
import './index.css'
import ReactSelect from 'react-select'
import { selectStyles } from './styledComponent'

interface SelectProps {
  onSlectOption: (value: string) => void
  options: Array<string>
  value: string
  isDisabled?: boolean
  isMulti?: boolean
  className?: string
  placeholder?: string
}

class Select extends Component<SelectProps> {
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
  render() {
    const {
      onSlectOption,
      options,
      value,
      isDisabled,
      isMulti,
      className,
      placeholder
    } = this.props

    return (
      <ReactSelect
        isDisabled={isDisabled}
        className={className ? className : 'styles-select'}
        css={selectStyles}
        options={options.length > 0 ? this.renderOptions(options) : []}
        onChange={onSlectOption}
        defaultValue={this.renderValue(value)}
        isMulti={isMulti}
        placeholder={placeholder}
      />
    )
  }
}
export { Select }
