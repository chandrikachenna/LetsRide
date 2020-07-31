import React from 'react'
import {
  CellLabel,
  TableBody,
  TableRow,
  TableCell,
  Details
} from './styledComponents'
import { Table } from '../../../../Common/components/Table'

interface DashboardProps {
  headings: any
  tableData: any
}
class Dashboard extends React.Component<DashboardProps> {
  render() {
    const { headings, tableData } = this.props
    console.log(tableData)

    return (
      <Table padded>
        <TableBody>
          <TableRow>
            {headings.map(heading => (
              <TableCell key={heading}>
                <CellLabel>{heading}</CellLabel>
              </TableCell>
            ))}
          </TableRow>
          {tableData.map(rowData => (
            <TableRow>
              <TableCell key={rowData.acceptedPersonDetails}>
                <Details>
                  <CellLabel>{rowData.acceptedPersonDetails.name}</CellLabel>
                  <CellLabel>
                    {rowData.acceptedPersonDetails.mobileNumber}
                  </CellLabel>
                </Details>
              </TableCell>
              <TableCell key={rowData.fromPlace}>
                <CellLabel>{rowData.fromPlace}</CellLabel>
              </TableCell>
              <TableCell key={rowData.toPlace}>
                <CellLabel>{rowData.toPlace}</CellLabel>
              </TableCell>
              {rowData.isFlexible ? (
                <TableCell key={rowData.fromDateTime}>
                  <Details>
                    <CellLabel>
                      {rowData.fromDateTime}
                      {' to '}
                    </CellLabel>
                    <CellLabel>{rowData.toDateTime}</CellLabel>
                  </Details>
                </TableCell>
              ) : (
                <TableCell key={rowData.fromDateTime}>
                  <CellLabel>{rowData.fromDateTime}</CellLabel>
                </TableCell>
              )}
              <TableCell key={rowData.noOfSeats}>
                <CellLabel>{rowData.noOfSeats}</CellLabel>
              </TableCell>
              <TableCell key={rowData.luggageQuantity}>
                <CellLabel>{rowData.luggageQuantity}</CellLabel>
              </TableCell>
              <TableCell key={rowData.rideRequestStatus}>
                <CellLabel>{rowData.rideRequestStatus}</CellLabel>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default Dashboard
