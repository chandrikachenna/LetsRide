import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'

interface ButtonWrapperProps {
  disabled: boolean
  css: any
  buttonStyles: any
}
export const ButtonWrapper = styled.button`
  background-color: ${(props: ButtonWrapperProps) =>
    props.disabled ? 'grey' : 'blue'};
  cursor: ${(props: ButtonWrapperProps) =>
    props.disabled ? 'default' : 'pointer'};
  color: white;
  ${tw`focus:outline-none`}
  ${(props: ButtonWrapperProps) => props.css}
  ${(props: ButtonWrapperProps) => props.buttonStyles}
`
export const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`
