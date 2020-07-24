import LetsRideService from '../../../services/LetsRideService'
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
  getCommonInfo = (info) => {
    const { fromPlace, toPlace, isFlexible, fromDateTime, toDateTime } = info
    return {
      'from_place': fromPlace,
      'to_place': toPlace,
      'is_flexible': isFlexible,
      'from_date_time': fromDateTime,
      'to_date_time': toDateTime
    }
  }

  @action.bound
  setUpdateRideRequestAPIStatus(apiStatus) {
    this.getUpdateRideRequestAPIStatus = apiStatus
    console.log('Status', this.getUpdateRideRequestAPIStatus);

  }
  @action.bound
  setUpdateRideRequestAPIError(error) {
    this.getUpdateRideRequestAPIError = error
    console.log('Error', this.getUpdateRideRequestAPIError);

  }
  @action.bound
  getRideRequestInfo(info) {
    console.log('ride Request');

    const basicInfo = this.getCommonInfo(info)
    const { noOfSeats, laguageQuantity } = info
    return {
      ...basicInfo,
      'number_of_seats': noOfSeats,
      'luggage_quantity': laguageQuantity
    }
  }
  @action.bound
  UpdateRideRequestInfo(info) {
    const requestObject = this.getRideRequestInfo(info)
    const UpdateRideRequestInfoPromise = this.letsRideService.AddRideRequestAPI(
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
  AsserTransportRequestInfo(info) {
    const basicInfo = this.getCommonInfo(info)
    const { noOfAssests, assetType, isAssetTypeOther, otherAssetType, assetSensitivity, whomToDeliver } = info
    return {
      ...basicInfo,
      'number_of_assets': noOfAssests,
      'asset_type': assetType,
      'is_asset_type_other': isAssetTypeOther,
      'other_asset_type': otherAssetType,
      'asset_sensitivity': assetSensitivity,
      'whom_to_deliver': whomToDeliver
    }
  }
  @action.bound
  UpdateAsserTransportRequestInfo(info) {
    const requestObject = this.AsserTransportRequestInfo(info)
    const UpdateAsserTransportRequestInfoPromise = this.letsRideService.AddAsserTransportRequestAPI(
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
  getShareRideInfo = (info) => {
    const basicInfo = this.getCommonInfo(info)
    const { noOfSeats, laguageQuantity } = info
    return {
      ...basicInfo,
      'number_of_seats_available': noOfSeats,
      'assets_quantity': laguageQuantity
    }
  }
  @action.bound
  UpdateShareRideInfo(info) {
    const requestObject = this.getShareRideInfo(info)
    const UpdateShareRideInfoPromise = this.letsRideService.AddShareRideAPI(
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
  getShareTravelInfo = (info) => {
    const basicInfo = this.getCommonInfo(info)
    const { travelMedium, assetQuantity } = info
    return {
      ...basicInfo,
      'travel_medium': travelMedium,
      'assets_quantity': assetQuantity
    }
  }
  @action.bound
  UpdateShareTravelInfo(info) {
    const requestObject = this.getShareTravelInfo(info)
    const UpdateShareTravelInfoPromise = this.letsRideService.AddShareTravelInfoAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(UpdateShareTravelInfoPromise)
      .to(this.setUpdateShareTravelInfoAPIStatus, () => ({}))
      .catch(this.setUpdateShareTravelInfoAPIError)
  }
}
export { FormsInfoModel }
