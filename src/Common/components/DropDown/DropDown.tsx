import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const trigger = <span>Request</span>

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' }
]

const DropDown = () => <Dropdown trigger={trigger} options={options} />

export { DropDown }
