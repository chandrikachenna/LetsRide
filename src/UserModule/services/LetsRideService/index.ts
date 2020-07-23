import { UpdateRideRequest, UpdateAsserTransportRequest, UpdateShareRide, UpdateShareTravelInfo } from "../../stores/types";

interface LetsRideService {
    UpdateRideRequestAPI: (
        requestObject: UpdateRideRequest
    ) => Promise<{}>
    UpdateAsserTransportRequestAPI: (
        requestObject: UpdateAsserTransportRequest
    ) => Promise<{}>
    UpdateShareRideAPI: (
        requestObject: UpdateShareRide
    ) => Promise<{}>
    UpdateShareTravelInfoAPI: (
        requestObject: UpdateShareTravelInfo
    ) => Promise<{}>
}
export default LetsRideService