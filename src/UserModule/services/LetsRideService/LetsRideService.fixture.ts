import LetsRideService from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getRideMatchingResultsResponse from '../../fixtures/getRideMatchingResultsResponse.json'
import getAssetMatchingResultsResponse from '../../fixtures/getAssetMatchingResultsResponse.json'

class LetsRideAPIService implements LetsRideService {
  GetRideMatchingResults(limit, offset, requestObject) {
    console.log('ride');

    let dummyData = GetPaginateData(limit, offset, getRideMatchingResultsResponse)
    return resolveWithTimeout(dummyData)
  }
  GetAssetMatchingResults(limit, offset, requestObject) {
    console.log('asset');

    let dummyData = GetPaginateData(limit, offset, getAssetMatchingResultsResponse)
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


function GetPaginateData(limit, offset, fixtureData) {
  let dataFromFixture = fixtureData.data.slice()
  let data = dataFromFixture.splice(offset, limit)
  let dummyData = {
    data: data,
    total_count: fixtureData.total_count
  }
  return dummyData
}