import styled from '@emotion/styled'
import tw from 'tailwind.macro'
interface LabelProps {
  css: boolean
}
export const WithLableWrapper = styled.div`
  ${tw`flex flex-col pt-1 pb-1`}
  width:100%;
`
export const WithLeftLableWrapper = styled.div`
  ${tw`flex items-center`}
  margin-top: ${(props: LabelProps) => (props.css ? '8px' : '0px')};
  margin-bottom: ${(props: LabelProps) => (props.css ? '8px' : '0px')};
  
`

export const Label = styled.div`
  margin-right: ${(props: LabelProps) => (props.css ? '20px' : '0px')};
`
export const Required = styled.div`
  color: red;
`
