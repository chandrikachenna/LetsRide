import styled from '@emotion/styled'
import {
  Typo14SteelHKGroteskRegular,
  Typo16SteelHKGroteskRegular
} from '../../styleGuide/Typos'
import { css } from '@emotion/core'
import { COLORS } from '../../themes/Colors'

export const CounterWrapper = styled.div``

export const CountOperand = styled(Typo16SteelHKGroteskRegular)``

export const CountValue = styled(Typo16SteelHKGroteskRegular)``

export const buttonStyles = css`
  width: 40px;
  height: 40px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
