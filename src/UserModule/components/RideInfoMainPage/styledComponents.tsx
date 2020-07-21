import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

export const PageWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center`}
  flex-grow:1;
  width: 100%;
`

export const datePickerStyles = css`
  ${tw`text-red`}
`
