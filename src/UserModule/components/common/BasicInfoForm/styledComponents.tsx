import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { COLORS } from '../../../../Common/themes/Colors'
import {
  Typo14WhiteHKGroteskSemiBold,
  Typo12SteelHKGroteskSemiBold,
  Typo20DarkBlueGreyHKGrotestBold
} from '../../../../Common/styleGuide/Typos'

export const FormTitle = styled(Typo20DarkBlueGreyHKGrotestBold)`
  align-self: center;
  ${tw`pb-4`}
`
export const cardStyles = css`
  border-radius: 6px;
  box-shadow: 0 4px 40px 0 darkBlueGrey16;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
export const inputStyles = css`
  width: 301px;
  height: 40px;
  border-radius: 2px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
export const InputLable = styled(Typo12SteelHKGroteskSemiBold)`
  ${tw`flex `}
`
export const ButtonStyles = css`
  width: 299px;
  height: 40px;
  border-radius: 4px;
  background-color: ${COLORS.brightBlue};
`
export const TextTypo = styled(Typo14WhiteHKGroteskSemiBold)``

export const ToFromDateTimeWrapper = styled.div`
  ${tw`flex flex-row `}
`
