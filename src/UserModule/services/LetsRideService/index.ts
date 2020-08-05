import {
  UpdateRideRequest,
  UpdateAsserTransportRequest,
  UpdateShareRide,
  UpdateShareTravelInfo,
  GetRidesMatchingResultsRequest,
  RequestMatchingResultsWithFilter,
  GetAssestMatchingResultsRequest,
  GetMyRideRequest,
  RequestMyRequestInfoWithDetails,
  GetMyAssetRequest
} from '../../stores/types'

interface LetsRideService {
  GetRideMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetRidesMatchingResultsRequest>
  GetAssetMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetAssestMatchingResultsRequest>
  GetMyRideRequests: (limit: number, offset: number, requestObject: RequestMyRequestInfoWithDetails) => Promise<GetMyRideRequest>
  GetMyAssetRequests: (limit: number, offset: number, requestObject: RequestMyRequestInfoWithDetails) => Promise<GetMyAssetRequest>
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
