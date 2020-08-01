import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {
  Typo14SteelHKGroteskRegular,
  Typo12SteelHKGroteskSemiBold
} from '../../../../Common/styleGuide/Typos'
import { Table } from '../../../../Common/components/Table'

export const TableBody = styled(Table.Body)``

export const TableRow = styled(Table.Row)``

export const TableCell = styled(Table.Cell)``
export const CellLabel = styled(Typo14SteelHKGroteskRegular)``
export const HeadingLable = styled(Typo12SteelHKGroteskSemiBold)``
export const Details = styled.div`
  ${tw`flex flex-col`}
`
