import React, { lazy } from 'react'
import { ProtectedRoute } from '../../Common/components/ProtectedRoute/ProtectedRoute'
import { LETSRIDE_ROUTE_PATH } from '../constants/NavigationConstants'
const RideInfoMainRoute = lazy(() => import('./RideInfoMainRoute'))

export const userRoutes = [
  <ProtectedRoute
    path={LETSRIDE_ROUTE_PATH}
    renderedComponent={RideInfoMainRoute}
  />
]
