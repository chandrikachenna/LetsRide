import React, { Component } from 'react'
import { LayoutWrapper } from './styledComponent'
import { PageHeader } from '../../../UserModule/components/common/PageHeader'

interface MainPageLayoutProps {
  src: string
}
class MainPageLayout extends Component<MainPageLayoutProps> {
  render() {
    const { src } = this.props
    return (
      <LayoutWrapper>
        <PageHeader imgSrc={src} />
        {this.props.children}
      </LayoutWrapper>
    )
  }
}
export { MainPageLayout }
