import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../themes/Colors'
const LayoutWrapper = styled.div`${tw`w-screen flex justify-center items-center`}
background-color:${COLORS.iceBlue};
height:100vh;
`
export { LayoutWrapper }
