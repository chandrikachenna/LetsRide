import LetsRideService from '../../../services/LetsRideService'
import { action, observable } from 'mobx'
import { APIStatus, API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { getUserDisplayableErrorMessage } from '../../../../Common/utils/APIUtils'
import { format } from 'date-fns'
class FormsInfoModel {
  letsRideService: LetsRideService

  @observable getAddRideRequestAPIStatus!: APIStatus
  @observable getAddRideRequestAPIError!: null | Error

  @observable getAddAsserTransportRequestAPIStatus!: APIStatus
  @observable getAddAsserTransportRequestAPIError!: null | Error

  @observable getAddShareRideAPIStatus!: APIStatus
  @observable getAddShareRideAPIError!: null | Error

  @observable getAddShareTravelInfoAPIStatus!: APIStatus
  @observable getAddShareTravelInfoAPIError!: null | Error

  constructor(letsRideService: LetsRideService) {
    this.letsRideService = letsRideService
    this.init()
  }
  @action.bound
  init = () => {
    this.getAddRideRequestAPIStatus = API_INITIAL
    this.getAddRideRequestAPIError = null

    this.getAddAsserTransportRequestAPIStatus = API_INITIAL
    this.getAddAsserTransportRequestAPIError = null

    this.getAddShareRideAPIStatus = API_INITIAL
    this.getAddShareRideAPIError = null

    this.getAddShareTravelInfoAPIStatus = API_INITIAL
    this.getAddShareTravelInfoAPIError = null
  }

  @action.bound
  getCommonInfo = info => {
    const { fromPlace, toPlace, isFlexible, fromDateTime, toDateTime } = info
    return {
      from_place: fromPlace,
      to_place: toPlace,
      is_flexible: isFlexible,
      from_date_time: fromDateTime,
      to_date_time: toDateTime
    }
  }

  @action.bound
  setAddRideRequestAPIStatus(apiStatus) {
    this.getAddRideRequestAPIStatus = apiStatus
    console.log('Status', this.getAddRideRequestAPIStatus)
  }
  @action.bound
  setAddRideRequestAPIError(error) {
    this.getAddRideRequestAPIError = error
  }
  @action.bound
  getRideRequestInfo(info) {
    console.log('ride Request')

    const basicInfo = this.getCommonInfo(info)
    const { seats, quantity } = info
    console.log({
      ...basicInfo,
      number_of_seats: seats,
      luggage_quantity: quantity
    })
    return {
      ...basicInfo,
      number_of_seats: seats,
      luggage_quantity: quantity
    }
  }
  @action.bound
  AddRideRequestInfo(info) {
    const requestObject = this.getRideRequestInfo(info)
    const AddRideRequestInfoPromise = this.letsRideService.AddRideRequestAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(AddRideRequestInfoPromise)
      .to(this.setAddRideRequestAPIStatus, () => ({}))
      .catch(this.setAddRideRequestAPIError)
  }

  @action.bound
  setAddAsserTransportRequestAPIStatus(apiStatus) {
    this.getAddAsserTransportRequestAPIStatus = apiStatus
  }
  @action.bound
  setAddAsserTransportRequestAPIError(error) {
    this.getAddAsserTransportRequestAPIError = error
  }
  @action.bound
  AsserTransportRequestInfo(info) {
    const basicInfo = this.getCommonInfo(info)
    const {
      noOfAssests,
      assetType,
      isAssetTypeOther,
      otherAssetType,
      assetSensitivity,
      whomToDeliver
    } = info
    return {
      ...basicInfo,
      number_of_assets: noOfAssests,
      asset_type: assetType,
      is_asset_type_other: isAssetTypeOther,
      other_asset_type: otherAssetType,
      asset_sensitivity: assetSensitivity,
      whom_to_deliver: whomToDeliver
    }
  }
  @action.bound
  AddAsserTransportRequestInfo(info) {
    const requestObject = this.AsserTransportRequestInfo(info)
    const AddAsserTransportRequestInfoPromise = this.letsRideService.AddAsserTransportRequestAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(AddAsserTransportRequestInfoPromise)
      .to(this.setAddAsserTransportRequestAPIStatus, () => ({}))
      .catch(this.setAddAsserTransportRequestAPIError)
  }

  @action.bound
  setAddShareRideAPIStatus(apiStatus) {
    this.getAddShareRideAPIStatus = apiStatus
  }
  @action.bound
  setAddShareRideAPIError(error) {
    this.getAddShareRideAPIError = error
  }
  @action.bound
  getShareRideInfo = info => {
    const basicInfo = this.getCommonInfo(info)
    const { noOfSeats, laguageQuantity } = info
    return {
      ...basicInfo,
      number_of_seats_available: noOfSeats,
      assets_quantity: laguageQuantity
    }
  }
  @action.bound
  AddShareRideInfo(info) {
    const requestObject = this.getShareRideInfo(info)
    const AddShareRideInfoPromise = this.letsRideService.AddShareRideAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(AddShareRideInfoPromise)
      .to(this.setAddShareRideAPIStatus, () => ({}))
      .catch(this.setAddShareRideAPIError)
  }

  @action.bound
  setAddShareTravelInfoAPIStatus(apiStatus) {
    this.getAddShareTravelInfoAPIStatus = apiStatus
  }
  @action.bound
  setAddShareTravelInfoAPIError(error) {
    this.getAddShareTravelInfoAPIError = error
  }
  @action.bound
  getShareTravelInfo = info => {
    const basicInfo = this.getCommonInfo(info)
    const { travelMedium, assetQuantity } = info
    return {
      ...basicInfo,
      travel_medium: travelMedium,
      assets_quantity: assetQuantity
    }
  }
  @action.bound
  AddShareTravelInfo(info) {
    const requestObject = this.getShareTravelInfo(info)
    const AddShareTravelInfoPromise = this.letsRideService.AddShareTravelInfoAPI(
      requestObject
    )
    return bindPromiseWithOnSuccess(AddShareTravelInfoPromise)
      .to(this.setAddShareTravelInfoAPIStatus, () => ({}))
      .catch(this.setAddShareTravelInfoAPIError)
  }
}
export { FormsInfoModel }
