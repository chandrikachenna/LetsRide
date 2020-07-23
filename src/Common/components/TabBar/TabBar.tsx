import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
  }
]

type tabData = {
  component: Function
  data: any
}
interface TabBarProps {
  data: Array<tabData>
}
class TabBar extends React.Component<TabBarProps> {
  render() {
    const { data } = this.props
    // panesList(data)
    return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  }
}

export { TabBar }
