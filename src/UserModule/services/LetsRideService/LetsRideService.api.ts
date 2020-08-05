import LetsRideService from '.'
import { create } from 'apisauce'
import Config from '../../../Common/constants/EnvironmentConstants'
import { apiMethods } from '../../../Common/constants/APIConstants'
import endpoints from '../endpoints'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { action } from "mobx"

class LetsRideAPIService implements LetsRideService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: "https://0ddccf3cb0dc.ngrok.io/api/lets_ride/"
      // baseURL: Config['BASE_URL']
    })
  }
  @action.bound
  async GetRideMatchingResults(limit, offset, requestObject) {
    const endpoint = `${endpoints.LetsRide.getRideMatchingResults}?limit=${limit}&offset=${offset}`
    return networkCallWithApisauce(
      this.api,
      endpoint,
      requestObject,
      apiMethods.post
    )
  }
  @action.bound
  async GetAssetMatchingResults(limit, offset, requestObject) {
    const endpoint = `${endpoints.LetsRide.getAssetMatchingResults}?limit=${limit}&offset=${offset}`
    return networkCallWithApisauce(
      this.api,
      endpoint,
      requestObject,
      apiMethods.post
    )
  }
  @action.bound
  async GetMyRideRequests(limit, offset, requestObject) {
    const endpoint = `${endpoints.LetsRide.getMyRideRequests}?limit=${limit}&offset=${offset}`
    return networkCallWithApisauce(
      this.api,
      endpoint,
      requestObject,
      apiMethods.post
    )
  }
  @action.bound
  async GetMyAssetRequests(limit, offset, requestObject) {
    const endpoint = `${endpoints.LetsRide.getMyAssetRequests}?limit=${limit}&offset=${offset}`
    return networkCallWithApisauce(
      this.api,
      endpoint,
      requestObject,
      apiMethods.post
    )
  }
  async AddRideRequestAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.addRideRequest,
      requestObject,
      apiMethods.post
    )
  }
  async AddAsserTransportRequestAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.addAsserTransportRequest,
      requestObject,
      apiMethods.post
    )
  }
  async AddShareRideAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.addShareRide,
      requestObject,
      apiMethods.post
    )
  }
  async AddShareTravelInfoAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.addShareTravelInfo,
      requestObject,
      apiMethods.post
    )
  }
}

export default LetsRideAPIService
