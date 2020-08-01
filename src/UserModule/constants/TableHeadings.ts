const TableHeadingsConstants = {
    acceptedPersonDetails: 'ACCEPTED PERSON DETAILS',
    from: 'FROM',
    to: 'TO',
    dateAndTime: 'DATE AND TIME',
    status: 'STATUS',
    noOfSeats: 'NO.OF SEATS',
    luggageQuantity: 'LUGGAGE QUANTITY',
    assetType: 'ASSET TYPE',
    assetSensitivity: 'ASSET SENSITIVITY',
    whomToDeliver: 'WHOM TO DELIVER',
    noOfAssets: 'NO.OF ASSETS',
    assetsQuantity: 'ASSET QUANTITY',
    travelMedium: 'TRAVEL MEDIUM',

}
const { acceptedPersonDetails, from, to, dateAndTime, status } = TableHeadingsConstants


const { luggageQuantity, noOfSeats, } = TableHeadingsConstants
export const RideMatchingTableHeadings = [acceptedPersonDetails, from, to, dateAndTime, noOfSeats, luggageQuantity, status]

const { noOfAssets, assetType, assetSensitivity, whomToDeliver } = TableHeadingsConstants
export const AssetMatchingTableHeadings = [acceptedPersonDetails, from, to, dateAndTime, noOfAssets, assetType, assetSensitivity, whomToDeliver, status]

export const RideRequestTableHeadings = [from, to, dateAndTime, noOfAssets, luggageQuantity, acceptedPersonDetails, status]

export const AssetRequestTableHeadings = [from, to, dateAndTime, noOfAssets, assetType, assetSensitivity, whomToDeliver, acceptedPersonDetails, status]

const { assetsQuantity } = TableHeadingsConstants
export const SharedRideTableHeadings = [from, to, dateAndTime, noOfSeats, assetsQuantity, status]

const { travelMedium } = TableHeadingsConstants
export const SharedAssetTableHeadings = [from, to, dateAndTime, travelMedium, assetsQuantity, status]