import styled from '@emotion/styled'
import tw from 'tailwind.macro'

interface InputElementProps {
   css: any
}
const InputElement = styled.input`
   ${tw`outline-none`}
   padding-left:5px;
   ${(props: InputElementProps) => props.css}
`
const InputElementWrapper = styled.div`
   ${tw`flex flex-col mt-2`}

`
const ErrorMsgSpan = styled.span`
   ${tw`mt-2`}
   height:18px;
   color:red
`

export { InputElement, InputElementWrapper, ErrorMsgSpan }
