import React, { Component } from 'react'
import { CardWrapper } from './styledComponents'

interface CardProps {
  cardStyles: any
}
class Card extends Component<CardProps> {
  render() {
    const { cardStyles } = this.props
    return <CardWrapper css={cardStyles}>{this.props.children}</CardWrapper>
  }
}

export { Card }
