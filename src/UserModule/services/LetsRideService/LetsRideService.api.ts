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
  async AddRideRequestAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.updateRideRequest,
      requestObject,
      apiMethods.post
    )
  }
  async AddAsserTransportRequestAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.updateAsserTransportRequest,
      requestObject,
      apiMethods.post
    )
  }
  async AddShareRideAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.updateShareRide,
      requestObject,
      apiMethods.post
    )
  }
  async AddShareTravelInfoAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.updateShareTravelInfo,
      requestObject,
      apiMethods.post
    )
  }
}

export default LetsRideAPIService
