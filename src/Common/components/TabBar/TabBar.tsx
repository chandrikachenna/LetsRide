import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function panesList(Component, firstData, secondDate) {
  return [
    {
      menuItem: firstData.title,
      render: () => (
        <Tab.Pane attached={false}>
          <Component data={firstData} />
        </Tab.Pane>
      )
    },
    {
      menuItem: secondDate.title,
      render: () => (
        <Tab.Pane attached={false}>
          <Component data={secondDate} />
        </Tab.Pane>
      )
    }
  ]
}
interface TabBarProps {
  renderedComponent: Function
  dataForComponentOne: any
  dataForComponentTwo: any
}
class TabBar extends React.Component<TabBarProps> {
  render() {
    const {
      renderedComponent,
      dataForComponentOne,
      dataForComponentTwo
    } = this.props
    return (
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panesList(
          renderedComponent,
          dataForComponentOne,
          dataForComponentTwo
        )}
      />
    )
  }
}

export { TabBar }
