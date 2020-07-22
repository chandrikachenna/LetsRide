import {
  LETSRIDE_ROUTE_PATH,
  REQUEST_RIDE_ROUTE_PATH,
  REQUEST_ASSET_TRANSPORT_ROUTE_PATH,
  SHARE_RIDE_ROUTE_PATH,
  SHARE_TRAVEL_INFO_ROUTE_PATH
} from '../constants/NavigationConstants'

export const goToHomePage = history => {
  history.push(LETSRIDE_ROUTE_PATH)
}

export const goToRequstRidePage = history => {
  history.push(REQUEST_RIDE_ROUTE_PATH)
}

export const goToRequstAssetTransportPage = history => {
  history.push(REQUEST_ASSET_TRANSPORT_ROUTE_PATH)
}

export const goToShareRidePage = history => {
  history.push(SHARE_RIDE_ROUTE_PATH)
}

export const goToShareTravelInfoPage = history => {
  history.push(SHARE_TRAVEL_INFO_ROUTE_PATH)
}
