import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { observer } from 'mobx-react'

interface optionObjectType {
  key: string
  text: string
  value: string
}
interface DropDownProps {
  options: Array<optionObjectType>
  trigger: any
  onChange: (event, data) => void
}
@observer
class DropDown extends React.Component<DropDownProps> {
  render() {
    const { options, trigger, onChange } = this.props
    return <Dropdown trigger={trigger} options={options} onChange={onChange} />
  }
}
export { DropDown }
