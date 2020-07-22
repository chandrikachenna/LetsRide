import React, { lazy } from 'react'

import { ProtectedRoute } from '../../Common/components/ProtectedRoute/ProtectedRoute'

import {
  LETSRIDE_ROUTE_PATH,
  REQUEST_RIDE_ROUTE_PATH,
  REQUEST_ASSET_TRANSPORT_ROUTE_PATH,
  SHARE_TRAVEL_INFO_ROUTE_PATH,
  SHARE_RIDE_ROUTE_PATH
} from '../constants/NavigationConstants'

const RideInfoMainRoute = lazy(() => import('./RideInfoMainRoute'))
const RequestRideRoute = lazy(() => import('./RequestRideRoute'))
const RequestAssetTransportRoute = lazy(() =>
  import('./RequestAssetTransportRoute')
)
const ShareRideRoute = lazy(() => import('./ShareRideRoute'))
const ShareTravelInfoRoute = lazy(() => import('./ShareTravelInfoRoute'))

export const userRoutes = [
  <ProtectedRoute
    key={LETSRIDE_ROUTE_PATH}
    path={LETSRIDE_ROUTE_PATH}
    renderedComponent={RideInfoMainRoute}
  />,
  <ProtectedRoute
    key={REQUEST_RIDE_ROUTE_PATH}
    path={REQUEST_RIDE_ROUTE_PATH}
    renderedComponent={RequestRideRoute}
  />,
  <ProtectedRoute
    key={REQUEST_ASSET_TRANSPORT_ROUTE_PATH}
    path={REQUEST_ASSET_TRANSPORT_ROUTE_PATH}
    renderedComponent={RequestAssetTransportRoute}
  />,
  <ProtectedRoute
    key={SHARE_RIDE_ROUTE_PATH}
    path={SHARE_RIDE_ROUTE_PATH}
    renderedComponent={ShareRideRoute}
  />,
  <ProtectedRoute
    key={SHARE_TRAVEL_INFO_ROUTE_PATH}
    path={SHARE_TRAVEL_INFO_ROUTE_PATH}
    renderedComponent={ShareTravelInfoRoute}
  />
]
