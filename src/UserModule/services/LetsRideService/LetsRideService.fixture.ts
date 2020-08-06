import LetsRideService from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getRideMatchingResultsResponse from '../../fixtures/getRideMatchingResultsResponse.json'
import getAssetMatchingResultsResponse from '../../fixtures/getAssetMatchingResultsResponse.json'
import getMyRideRequestsResponse from '../../fixtures/getMyRideRequestsResponse.json'
import getMyAssetRequestsResponse from '../../fixtures/getMyAssetRequestResponse.json'
import getSharedRideDetailsResponse from '../../fixtures/getSharedRideDetailsResponse.json'
import getSharedTravelInfoResponse from '../../fixtures/getSharedTravelInfoResponse.json'
import { action } from "mobx"
class LetsRideAPIService implements LetsRideService {
  GetRideMatchingResults(limit, offset, requestObject) {
    let dummyData = GetPaginateData(limit, offset, getRideMatchingResultsResponse)
    return resolveWithTimeout(dummyData)
  }
  GetAssetMatchingResults(limit, offset, requestObject) {
    let dummyData = GetPaginateData(limit, offset, getAssetMatchingResultsResponse)
    return resolveWithTimeout(dummyData)
  }
  GetMyRideRequests(limit, offset, requestObject) {
    let dummyData = GetPaginateData(limit, offset, getMyRideRequestsResponse)
    return resolveWithTimeout(dummyData)
  }
  GetMyAssetRequests(limit, offset, requestObject) {
    let dummyData = GetPaginateData(limit, offset, getMyAssetRequestsResponse)
    return resolveWithTimeout(dummyData)
  }
  GetSharedRideDetails(limit, offset, requestObject) {
    let dummyData = GetPaginateData(limit, offset, getSharedRideDetailsResponse)
    return resolveWithTimeout(dummyData)
  }
  GetSharedTravelInfo(limit, offset, requestObject) {
    let dummyData = GetPaginateData(limit, offset, getSharedTravelInfoResponse)
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