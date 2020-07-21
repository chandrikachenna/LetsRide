import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { COLORS } from '../../../Common/themes/Colors'
import {
  Typo14WhiteHKGroteskSemiBold,
  Typo12SteelHKGroteskSemiBold
} from '../../../Common/styleGuide/Typos'

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

export const inputStyles = css`
  width: 401px;
  height: 40px;
  border-radius: 2px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
export const InputLable = styled(Typo12SteelHKGroteskSemiBold)`
  ${tw`flex `}
`
export const cardStyles = css`
  ${tw`flex items-center justify-center`}
  width: 460px;
  height: 200px;
  border-radius: 6px;
  box-shadow: 0 4px 40px 0 darkBlueGrey16;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
