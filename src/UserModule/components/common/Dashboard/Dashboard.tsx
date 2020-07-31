import React from 'react'
import {
  CellLabel,
  TableBody,
  TableRow,
  TableCell,
  Details
} from './styledComponents'
import { Table } from '../../../../Common/components/Table'
import { CheckBox } from '../../../../Common/components/CheckBox'

import { observer } from 'mobx-react'

interface DashboardProps {
  headings: any
  tableData: any
}

@observer
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
            <TableRow key={rowData.id}>
              <AcceptedPersonDetails
                acceptedPersonDetails={rowData.acceptedPersonDetails}
              />
              <Cell cellData={rowData.fromPlace} />
              <Cell cellData={rowData.toPlace} />
              {rowData.isFlexible ? (
                <FromAndToDate
                  fromDateTime={rowData.fromDateTime}
                  toDateTime={rowData.toDateTime}
                />
              ) : (
                <Cell cellData={rowData.fromDateTime} />
              )}
              <Cell cellData={rowData.noOfSeats} />
              <Cell cellData={rowData.luggageQuantity} />
              <TableCell key={rowData.isStatusPending}>
                <CheckBox
                  handleCheck={rowData.updateRideRequestStatus}
                  isChecked={rowData.isStatusPending}
                  isLabled={rowData.isStatusPending}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default Dashboard

function AcceptedPersonDetails(props) {
  const { name, mobileNumber } = props.acceptedPersonDetails
  return (
    <TableCell key={name}>
      <Details>
        <CellLabel>{name}</CellLabel>
        <CellLabel>{mobileNumber}</CellLabel>
      </Details>
    </TableCell>
  )
}

function Cell(props) {
  const { cellData } = props
  return (
    <TableCell key={cellData}>
      <CellLabel>{cellData}</CellLabel>
    </TableCell>
  )
}

function FromAndToDate(props) {
  const { fromDateTime, toDateTime } = props
  return (
    <TableCell key={fromDateTime}>
      <Details>
        <CellLabel>
          {fromDateTime}
          {' to '}
        </CellLabel>
        <CellLabel>{toDateTime}</CellLabel>
      </Details>
    </TableCell>
  )
}
