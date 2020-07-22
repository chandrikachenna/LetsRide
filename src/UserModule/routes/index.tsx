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
    path={LETSRIDE_ROUTE_PATH}
    renderedComponent={RideInfoMainRoute}
  />,
  <ProtectedRoute
    path={REQUEST_RIDE_ROUTE_PATH}
    renderedComponent={RequestRideRoute}
  />,
  <ProtectedRoute
    path={REQUEST_ASSET_TRANSPORT_ROUTE_PATH}
    renderedComponent={RequestAssetTransportRoute}
  />,
  <ProtectedRoute
    path={SHARE_RIDE_ROUTE_PATH}
    renderedComponent={ShareRideRoute}
  />,
  <ProtectedRoute
    path={SHARE_TRAVEL_INFO_ROUTE_PATH}
    renderedComponent={ShareTravelInfoRoute}
  />
]
