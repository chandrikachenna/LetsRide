import {
  UpdateRideRequest,
  UpdateAsserTransportRequest,
  UpdateShareRide,
  UpdateShareTravelInfo,
  GetRidesMatchingResultsRequest,
  RequestMatchingResultsWithFilter,
  GetAssestMatchingResultsRequest,
  GetMyRideRequest,
  RequestInfoWithDetails,
  GetMyAssetRequest,
  GetSharedRideDetailsRequest,
  GetSharedTravelInfoRequest
} from '../../stores/types'

interface LetsRideService {
  GetRideMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetRidesMatchingResultsRequest>
  GetAssetMatchingResults: (limit: number, offset: number, requestObject: RequestMatchingResultsWithFilter) => Promise<GetAssestMatchingResultsRequest>
  GetMyRideRequests: (limit: number, offset: number, requestObject: RequestInfoWithDetails) => Promise<GetMyRideRequest>
  GetMyAssetRequests: (limit: number, offset: number, requestObject: RequestInfoWithDetails) => Promise<GetMyAssetRequest>
  GetSharedRideDetails: (limit: number, offset: number, requestObject: RequestInfoWithDetails) => Promise<GetSharedRideDetailsRequest>
  GetSharedTravelInfo: (limit: number, offset: number, requestObject: RequestInfoWithDetails) => Promise<GetSharedTravelInfoRequest>
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
