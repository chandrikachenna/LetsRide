import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function panesList(Component, firstData, secondDate) {
  return [
    {
      menuItem: firstData.title,
      render: () => <Component data={firstData} />
    },
    {
      menuItem: secondDate.title,
      render: () => <Component data={secondDate} />
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
