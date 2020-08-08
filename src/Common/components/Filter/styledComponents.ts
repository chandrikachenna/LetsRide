import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { Typo14SteelHKGroteskRegular, Typo12DarkBlueGreyHKGroteskSemiBold } from "../../styleGuide/Typos"

export const FilterIcon = styled.img`
   ${tw`ml-2`};
   width: 16px;
   height: 16px;
   object-fit: contain;
`

export const FilterContainer = styled.div`
   ${tw`flex justify-between mt-4 mb-4`}
`

export const Dropdown = styled.div`
   ${tw``}
   
`

export const Container = styled.div`
   ${tw`flex items-center justify-center`};
   width: 200px;
`

export const DropdownContent = styled.div`
   ${tw``};
   cursor: pointer;
   background-color: #f9f9f9;
   padding: 12px 16px;
   
`

export const DropdownItem = styled.button`
   ${tw`hover:bg-gray-200 p-1 flex flex-col focus:outline-none`}
   
`
export const FilterText = styled(Typo12DarkBlueGreyHKGroteskSemiBold)`
   ${tw``}
   margin-left:5px;
`

export const FilterAndTextWrapper = styled.div`
   ${tw`flex`}
`
interface OptionProps {
   value: string
}
export const Option = styled(Typo14SteelHKGroteskRegular)`
outline: none
${(props: OptionProps) => props.value}

   `

