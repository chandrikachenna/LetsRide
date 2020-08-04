import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const tagOptions = [
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement'
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined'
  }
]

class FilterBar extends React.Component {
  handle = (e, value) => {
    console.log(value)
  }
  render() {
    return (
      <Dropdown icon='none' text='Sample Filter' onChange={this.handle}>
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {tagOptions.map(option => (
              <Dropdown.Item key={option.value} {...option} />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
export default FilterBar
