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
`
export const ButtonStyles = css`
width: 129px;
  height: 40px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
  color:${COLORS.darkBlueGrey};
`
export { Layout, Text, Button }
