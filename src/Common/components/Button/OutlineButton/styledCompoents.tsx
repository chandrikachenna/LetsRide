import styled from '@emotion/styled'
import { BaseButton } from '../BaseButton'

export const OutlineButtonWrapper = styled(BaseButton)`
  background-color: ${props => (props.disabled ? 'grey' : 'white')};
  color: ${props => (props.disabled ? 'white' : 'black')};
`
