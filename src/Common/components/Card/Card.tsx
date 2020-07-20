import React, { Component } from 'react'
import { CardWrapper } from './styledComponents'

class Card extends Component {
  render() {
    return <CardWrapper>{this.props.children}</CardWrapper>
  }
}

export { Card }
