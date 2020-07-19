import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { PageHeaderWrapper } from './styledComponents'

interface PageHeaderProps {}

@observer
class PageHeader extends Component<PageHeaderProps> {
  render() {
    return <PageHeaderWrapper></PageHeaderWrapper>
  }
}

export default PageHeader
