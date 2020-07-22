import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from "@emotion/core"
import { COLORS } from "../../themes/Colors"

interface InputElementProps {
   css: any
   isError: boolean
}
const ErrorView = css`
    border: solid 1px ${COLORS.neonRed};
  background-color: ${COLORS.neonRed5};
`

const InputElement = styled.input`
   ${tw`outline-none`}
   padding-left:5px;
   ${(props: InputElementProps) => props.css}
   ${(props: InputElementProps) => props.isError ? ErrorView : ''}
`
const InputElementWrapper = styled.div`
   ${tw`flex flex-col mt-2`}

`
const ErrorMsgSpan = styled.span`
   ${tw`mt-1`}
   height:10px;
   color:red;
   font-size:10px;
`

export { InputElement, InputElementWrapper, ErrorMsgSpan }
