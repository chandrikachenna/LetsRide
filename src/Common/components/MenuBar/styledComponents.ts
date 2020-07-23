import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo14HKGroteskRegular } from "../../styleGuide/Typos"

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
   color: black;
   text-align: center;
`

export { Layout, Text, Button }
