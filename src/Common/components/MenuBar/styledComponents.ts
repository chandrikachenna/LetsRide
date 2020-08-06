import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo14HKGroteskRegular } from "../../styleGuide/Typos"
import { css } from "@emotion/core"
import { COLORS } from "../../themes/Colors"

const Layout = styled.div`
   ${tw`flex flex-row`}
`
const Button = styled.button`
   height: 40px;
   width: 102px;
   border-radius: 4px;
   background-color: white;
   border: solid 1px #d7dfe9;
`
const Text = styled(Typo14HKGroteskRegular)`
   text-align: center;
`
export const ActiveButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.brightBlue};
  background-color: ${COLORS.brightBlue};
  color:${COLORS.white};
  border-radius:0px
`
export const ButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
  color:${COLORS.darkBlueGrey};
  border-radius:0px
`
export { Layout, Text, Button }

export const LeftButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
  color:${COLORS.darkBlueGrey};
  border-radius:2px 0px 0px 2px;
`
export const LeftActiveButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.brightBlue};
  background-color: ${COLORS.brightBlue};
  color:${COLORS.white};
  border-radius:2px 0px 0px 2px;
`
export const RightButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
  color:${COLORS.darkBlueGrey};
  border-radius:0px 2px 2px 0px;
`

export const RightActiveButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.brightBlue};
  background-color: ${COLORS.brightBlue};
  color:${COLORS.white};
  border-radius:0px 2px 2px 0px;
`
