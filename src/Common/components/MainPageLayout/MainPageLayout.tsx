import React, { Component } from 'react'
import { LayoutWrapper } from './styledComponent'
import { PageHeader } from '../../../UserModule/components/common/PageHeader'
class MainPageLayout extends Component {
  render() {
    return (
      <LayoutWrapper>
        <PageHeader />
        {this.props.children}
      </LayoutWrapper>
    )
  }
}
export { MainPageLayout }
