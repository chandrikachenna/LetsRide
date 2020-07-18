import React, { Component } from 'react'
import { LayoutWrapper } from './styledComponent'
class AuthLayout extends Component {
  render() {
    return <LayoutWrapper>{this.props.children}</LayoutWrapper>
  }
}
export { AuthLayout }
