import LetsRideService from ".";
import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

class LetsRideAPIService implements LetsRideService {
    async UpdateRideRequestAPI() {
        return resolveWithTimeout({})
    }
    async UpdateAsserTransportRequestAPI() {
        return resolveWithTimeout({})
    }
    async UpdateShareRideAPI() {
        return resolveWithTimeout({})
    }
    async UpdateShareTravelInfoAPI() {
        return resolveWithTimeout({})
    }
}

export default LetsRideAPIService