import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../../../../Common/themes/Colors'
export const PageHeaderWrapper = styled.div`
  ${tw`flex w-screen justify-between`}
  height: 80px;
  border: solid 1px ${COLORS.lightBlueGrey};
  background-color: ${COLORS.white};
`
