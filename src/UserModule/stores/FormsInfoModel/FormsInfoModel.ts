import LetsRideService from '../../services/LetsRideService'
import { action, observable } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
class FormsInfoModel {
  letsRideService: LetsRideService

  @observable getUpdateRideRequestAPIStatus!: APIStatus
  @observable getUpdateRideRequestAPIError!: null | Error

  @observable getUpdateAsserTransportRequestAPIStatus!: APIStatus
  @observable getUpdateAsserTransportRequestAPIError!: null | Error

  @observable getUpdateShareRideAPIStatus!: APIStatus
  @observable getUpdateShareRideAPIError!: null | Error

  @observable getUpdateShareTravelInfoAPIStatus!: APIStatus
  @observable getUpdateShareTravelInfoAPIError!: null | Error

  constructor(letsRideService: LetsRideService) {
    this.letsRideService = letsRideService
    this.init()
  }
  @action.bound
  init = () => {
    this.getUpdateRideRequestAPIStatus = API_INITIAL
    this.getUpdateRideRequestAPIError = null

    this.getUpdateAsserTransportRequestAPIStatus = API_INITIAL
    this.getUpdateAsserTransportRequestAPIError = null

    this.getUpdateShareRideAPIStatus = API_INITIAL
    this.getUpdateShareRideAPIError = null

    this.getUpdateShareTravelInfoAPIStatus = API_INITIAL
    this.getUpdateShareTravelInfoAPIError = null
  }

  @action.bound
  setUpdateRideRequestAPIStatus(apiStatus) {
    this.getUpdateRideRequestAPIStatus = apiStatus
  }
  @action.bound
  setUpdateRideRequestAPIError(error) {
    this.getUpdateRideRequestAPIError = error
  }
  @action.bound
  UpdateRideRequestInfo(requestObject) {
    const UpdateRideRequestInfoPromise = this.letsRideService.UpdateRideRequestAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(UpdateRideRequestInfoPromise)
      .to(this.setUpdateRideRequestAPIStatus, () => ({}))
      .catch(this.setUpdateRideRequestAPIError)
  }

  @action.bound
  setUpdateAsserTransportRequestAPIStatus(apiStatus) {
    this.getUpdateAsserTransportRequestAPIStatus = apiStatus
  }
  @action.bound
  setUpdateAsserTransportRequestAPIError(error) {
    this.getUpdateAsserTransportRequestAPIError = error
  }
  @action.bound
  UpdateAsserTransportRequestInfo(requestObject) {
    const UpdateAsserTransportRequestInfoPromise = this.letsRideService.UpdateAsserTransportRequestAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(UpdateAsserTransportRequestInfoPromise)
      .to(this.setUpdateAsserTransportRequestAPIStatus, () => ({}))
      .catch(this.setUpdateAsserTransportRequestAPIError)
  }

  @action.bound
  setUpdateShareRideAPIStatus(apiStatus) {
    this.getUpdateShareRideAPIStatus = apiStatus
  }
  @action.bound
  setUpdateShareRideAPIError(error) {
    this.getUpdateShareRideAPIError = error
  }
  @action.bound
  UpdateShareRideInfo(requestObject) {
    const UpdateShareRideInfoPromise = this.letsRideService.UpdateShareRideAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(UpdateShareRideInfoPromise)
      .to(this.setUpdateShareRideAPIStatus, () => ({}))
      .catch(this.setUpdateShareRideAPIError)
  }

  @action.bound
  setUpdateShareTravelInfoAPIStatus(apiStatus) {
    this.getUpdateShareTravelInfoAPIStatus = apiStatus
  }
  @action.bound
  setUpdateShareTravelInfoAPIError(error) {
    this.getUpdateShareTravelInfoAPIError = error
  }
  @action.bound
  UpdateShareTravelInfo(requestObject) {
    const UpdateShareTravelInfoPromise = this.letsRideService.UpdateShareTravelInfoAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(UpdateShareTravelInfoPromise)
      .to(this.setUpdateShareTravelInfoAPIStatus, () => ({}))
      .catch(this.setUpdateShareTravelInfoAPIError)
  }
}
export { FormsInfoModel }
