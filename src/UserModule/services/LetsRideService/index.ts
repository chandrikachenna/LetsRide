import {
  UpdateRideRequest,
  UpdateAsserTransportRequest,
  UpdateShareRide,
  UpdateShareTravelInfo,
  GetMatchingResultsRequest,
  RequestMatchingResultsWithFilter
} from '../../stores/types'

interface LetsRideService {
  GetRideMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetMatchingResultsRequest>
  AddRideRequestAPI: (requestObject: UpdateRideRequest) => Promise<{}>
  AddAsserTransportRequestAPI: (
    requestObject: UpdateAsserTransportRequest
  ) => Promise<{}>
  AddShareRideAPI: (requestObject: UpdateShareRide) => Promise<{}>
  AddShareTravelInfoAPI: (
    requestObject: UpdateShareTravelInfo
  ) => Promise<{}>
}
export default LetsRideService
