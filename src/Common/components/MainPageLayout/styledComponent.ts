import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../themes/Colors'

export const LayoutWrapper = styled.div`
  ${tw`flex flex-col items-center min-h-screen`}
  ${tw`w-screen `}
   background-color:${COLORS.whiteTwo};
`
