import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const WithLableWrapper = styled.div`
  ${tw`flex flex-col pt-1 pb-1`}
`
export const WithLeftLableWrapper = styled.div`
  ${tw`flex items-center`}
`
interface LabelProps {
  css: boolean
}
export const Label = styled.div`
  margin-right: ${(props: LabelProps) => (props.css ? '20px' : '0px')};
`
export const Required = styled.div`
  color: red;
`
