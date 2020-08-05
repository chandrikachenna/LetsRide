import React from 'react'
import {
  HeadingLable,
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
  headings: Array<string>
  title: string
  tableData: any
  dashboard: string
}

@observer
class Dashboard extends React.Component<DashboardProps> {
  render() {
    const { dashboard, title, headings, tableData } = this.props
    return (
      <Table padded>
        <TableBody>
          <TableRow>
            {headings.map(heading => (
              <TableCell key={heading}>
                <HeadingLable>{heading}</HeadingLable>
              </TableCell>
            ))}
          </TableRow>
          {tableData.map(rowData => (
            <TableRow key={rowData.id}>
              {dashboard.match('matchingResults') && (
                <AcceptedPersonDetails
                  acceptedPersonDetails={rowData.acceptedPersonDetails}
                />
              )}
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

              {title.match('Ride')
                ? (dashboard.match('matchingResults') && (
                    <>
                      <Cell cellData={rowData.noOfSeats} />
                      <Cell cellData={rowData.luggageQuantity} />
                    </>
                  )) ||
                  (dashboard.match('myRequests') && (
                    <>
                      <Cell cellData={rowData.numberOfAssets} />
                      <Cell cellData={rowData.luggageQuantity} />
                    </>
                  )) ||
                  (dashboard.match('sharedDetails') && (
                    <>
                      <Cell cellData={rowData.noOfSeats} />
                      <Cell cellData={rowData.assetsQuantity} />
                    </>
                  ))
                : ((dashboard.match('matchingResults') ||
                    dashboard.match('myRequests')) && (
                    <>
                      <Cell cellData={rowData.numberOfAssets} />
                      <Cell cellData={rowData.assetType} />
                      <Cell cellData={rowData.assetSensitivity} />
                      <Cell cellData={rowData.whomToDeliver} />
                    </>
                  )) ||
                  (dashboard.match('sharedDetails') && (
                    <>
                      <Cell cellData={rowData.travelMedium} />
                      <Cell cellData={rowData.assetsQuantity} />
                    </>
                  ))}
              {dashboard.match('myRequests') && (
                <AcceptedPersonDetails
                  acceptedPersonDetails={rowData.acceptedPersonDetails}
                />
              )}
              {dashboard.match('matchingResults') ? (
                <TableCell key={rowData.isStatusPending}>
                  <CheckBox
                    handleCheck={rowData.updateRideRequestStatus}
                    isChecked={rowData.isStatusPending}
                    isLabled={rowData.isStatusPending}
                  />
                </TableCell>
              ) : (
                <Cell cellData={rowData.status} />
              )}
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
