import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { COLORS } from '../../../Common/themes/Colors'
import { Typo12SteelHKGroteskSemiBold } from '../../../Common/styleGuide/Typos'
export const PageWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center`}
  flex-grow:1;
  width: 100%;
`
export const LableTypo = styled(Typo12SteelHKGroteskSemiBold)`
  ${tw`flex `}
`
