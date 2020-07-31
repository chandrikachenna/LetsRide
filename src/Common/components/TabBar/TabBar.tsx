import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { observer } from 'mobx-react'

function panesList(Component, RenderedComponentTwo, firstData, secondDate) {
  return [
    {
      menuItem: firstData.title,
      render: () => <Component key={firstData.title} data={firstData} />
    },
    {
      menuItem: secondDate.title,
      render: () => (
        <RenderedComponentTwo key={secondDate.title} data={secondDate} />
      )
    }
  ]
}
interface TabBarProps {
  renderedComponent: Function
  renderedComponentTwo: Function
  dataForComponentOne: any
  dataForComponentTwo: any
}

@observer
class TabBar extends React.Component<TabBarProps> {
  render() {
    const {
      renderedComponent,
      renderedComponentTwo,
      dataForComponentOne,
      dataForComponentTwo
    } = this.props
    return (
      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panesList(
          renderedComponent,
          renderedComponentTwo,
          dataForComponentOne,
          dataForComponentTwo
        )}
        style={{ width: '100%', height: '300px' }}
      />
    )
  }
}

export { TabBar }
