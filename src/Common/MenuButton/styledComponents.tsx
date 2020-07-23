import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { COLORS } from '../themes/Colors'
import { Typo14HKGroteskRegular } from '../styleGuide/Typos'

type ButtonTagProps = {
  width: number
  variant: string
  color: string
}

const ButtonTag = styled.button<ButtonTagProps>`
  ${tw`focus:outline-none`}
  height: 40px;
  border-radius: 4px;
  border: solid 1px #d7dfe9;
  width: ${props => props.width || '40px'};
  color: ${props => props.color || `${COLORS.white}`};
  background-color: ${props => props.variant || `${COLORS.white}`};
`
// disabled: ${props => props.disabled || ''};

const Text = styled(Typo14HKGroteskRegular)`
  color: ${props => props.color || `${COLORS.white}`};
`

export { ButtonTag, Text }
