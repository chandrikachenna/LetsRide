import React, { Component } from 'react'

import { FilterConstants } from '../../constants/FilterConstants'
import { FilterIcon } from '../Icons/FilterIcon'
import './index.css'
import {
  FilterContainer,
  FilterAndTextWrapper,
  Dropdown,
  DropdownContent,
  DropdownItem,
  FilterText,
  Option
} from './styledComponents'

export interface FilterFunctionProps {
  onClickSelectFilter?: () => void
}

class Filter extends Component<FilterFunctionProps> {
  onClickDropdownItem = event => {
    console.log(event.parent)
    console.log(event.target.innerHTML)

    const { onClickSelectFilter } = this.props
  }

  ListOfItems = () => {
    return FilterConstants.map(eachItem => {
      return (
        <DropdownItem
          id={eachItem}
          key={eachItem}
          onClick={this.onClickDropdownItem}
          value={eachItem}
        >
          <Option value={'hey'}>{eachItem}</Option>
        </DropdownItem>
      )
    })
  }

  render() {
    return (
      <FilterContainer>
        <Dropdown className={'dropdown'}>
          <FilterAndTextWrapper>
            <FilterIcon />
            <FilterText>FILTER</FilterText>
          </FilterAndTextWrapper>
          <DropdownContent className={'dropdown-content'}>
            {this.ListOfItems()}
          </DropdownContent>
        </Dropdown>
      </FilterContainer>
    )
  }
}

export default Filter
