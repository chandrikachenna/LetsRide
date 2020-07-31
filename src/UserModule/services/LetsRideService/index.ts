import {
  UpdateRideRequest,
  UpdateAsserTransportRequest,
  UpdateShareRide,
  UpdateShareTravelInfo,
  GetRidesMatchingResultsRequest,
  RequestMatchingResultsWithFilter,
  GetAssestMatchingResultsRequest
} from '../../stores/types'

interface LetsRideService {
  GetRideMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetRidesMatchingResultsRequest>
  GetAssetMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetAssestMatchingResultsRequest>
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
