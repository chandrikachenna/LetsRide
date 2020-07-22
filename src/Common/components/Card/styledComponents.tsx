import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../themes/Colors'

interface CardWrapperProps {
  css: any
}
export const CardWrapper = styled.div`
   ${tw`flex flex-col items-start justify-start p-16`}
  background-color: ${COLORS.white};
  padding: 15;
  ${(props: CardWrapperProps) => props.css}
`
