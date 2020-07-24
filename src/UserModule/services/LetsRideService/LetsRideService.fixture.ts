import LetsRideService from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getMatchingResultsResponse from '../../fixtures/getMatchingResultsResponse.json'
import { RequestMatchingResultsWithFilter } from "../../stores/types"
class LetsRideAPIService implements LetsRideService {
  GetRideMatchingResults() {
    return resolveWithTimeout(getMatchingResultsResponse)
  }
  AddRideRequestAPI() {
    return resolveWithTimeout({})
  }
  AddAsserTransportRequestAPI() {
    return resolveWithTimeout({})
  }
  AddShareRideAPI() {
    return resolveWithTimeout({})
  }
  AddShareTravelInfoAPI() {
    return resolveWithTimeout({})
  }
}

export default LetsRideAPIService
