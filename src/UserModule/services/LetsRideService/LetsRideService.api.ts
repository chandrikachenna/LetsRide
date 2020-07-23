import LetsRideService from '.'
import { create } from 'apisauce'
import Config from '../../../Common/constants/EnvironmentConstants'
import { apiMethods } from '../../../Common/constants/APIConstants'
import endpoints from '../endpoints'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'

class LetsRideAPIService implements LetsRideService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: Config['BASE_URL']
    })
  }
  async UpdateRideRequestAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.updateRideRequest,
      requestObject,
      apiMethods.post
    )
  }
  async UpdateAsserTransportRequestAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.UpdateAsserTransportRequest,
      requestObject,
      apiMethods.post
    )
  }
  async UpdateShareRideAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.UpdateShareRide,
      requestObject,
      apiMethods.post
    )
  }
  async UpdateShareTravelInfoAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.LetsRide.UpdateShareTravelInfo,
      requestObject,
      apiMethods.post
    )
  }
}

export default LetsRideAPIService
