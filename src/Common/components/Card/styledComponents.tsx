import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../themes/Colors'

interface CardWrapperProps {
  css: any
}
export const CardWrapper = styled.div`
  background-color: ${COLORS.white};
  padding: 15;
  ${(props: CardWrapperProps) => props.css}
`
