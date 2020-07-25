import LetsRideService from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getMatchingResultsResponse from '../../fixtures/getMatchingResultsResponse.json'

class LetsRideAPIService implements LetsRideService {
  GetRideMatchingResults(limit, offset, requestObject) {
    let dataFromFixture = getMatchingResultsResponse.data.slice()
    let data = dataFromFixture.splice(offset, limit)
    let dummyData = {
      data: data,
      total_count: getMatchingResultsResponse.total_count
    }
    return resolveWithTimeout(dummyData)
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
