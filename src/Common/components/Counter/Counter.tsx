import React, { Component } from 'react'
import { CounterWrapper, CountOperand, buttonStyles } from './styledComponents'
import { Button } from '../Button'
import { OUTLINE } from '../../constants/ButtonTypes'
import { ICREMENT, DECREMENT } from './constants'

interface CounterProps {
  onIncrement: () => void
  onDecrement: () => void
  count: number
}
class Counter extends Component<CounterProps> {
  render() {
    const { onIncrement, onDecrement, count } = this.props
    return (
      <CounterWrapper>
        <Button
          type={OUTLINE}
          disabled={false}
          onClick={onIncrement}
          text={ICREMENT}
          textTypo={CountOperand}
          buttonStyles={buttonStyles}
          loadingStatus={false}
        />
        <Button
          disabled={true}
          onClick={() => {}}
          text={count}
          textTypo={CountOperand}
          buttonStyles={buttonStyles}
          loadingStatus={false}
        />
        <Button
          disabled={false}
          onClick={onDecrement}
          text={DECREMENT}
          textTypo={CountOperand}
          buttonStyles={buttonStyles}
          loadingStatus={false}
        />
      </CounterWrapper>
    )
  }
}

export { Counter }
