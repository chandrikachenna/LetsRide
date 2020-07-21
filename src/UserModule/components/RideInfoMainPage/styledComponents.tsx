import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { COLORS } from '../../../Common/themes/Colors'
import { Typo14WhiteHKGroteskSemiBold } from '../../../Common/styleGuide/Typos'

export const PageWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center`}
  flex-grow:1;
  width: 100%;
`

export const datePickerStyles = css`
  ${tw`text-red`}
`
export const signInButtonStyles = css`
  width: 399px;
  height: 40px;
  border-radius: 4px;
  background-color: ${COLORS.brightBlue};
`
export const TextTypo = styled(Typo14WhiteHKGroteskSemiBold)``
