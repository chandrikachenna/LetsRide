import { observable } from 'mobx'
import {
  RidesMatchingResultObject,
  AssestMatchingResultObject
} from '../../types'

class ResultITemModel {
  id: number
  fromPlace: string
  toPlace: string
  isFlexible: boolean
  fromDateTime: string
  toDateTime: string
  acceptedPersonDetails: { name: string; mobileNumber: number }
  noOfSeats: number
  luggageQuantity: number
  numberOfAssets: number
  assetType: string
  assetSensitivity
  whomToDeliver
  assetQuantity
  travelMedium
  status!: string
  @observable isStatusPending: boolean
  constructor(ResultItem: any) {
    // console.log(ResultItem)
    console.log(ResultItem)

    this.id = ResultItem.id ? ResultItem.id : Math.random()
    this.fromPlace = ResultItem.from_place
    this.toPlace = ResultItem.to_place
    this.isFlexible = ResultItem.is_flexible
    this.fromDateTime = ResultItem.from_date_time
    this.toDateTime = ResultItem.to_date_time
    this.acceptedPersonDetails = {
      name: ResultItem.accepted_person_details
        ? ResultItem.accepted_person_details.name
        : null,
      mobileNumber: ResultItem.accepted_person_details
        ? ResultItem.accepted_person_details.mobile_number
        : null
    }
    if (ResultItem.number_of_seats) {
      this.noOfSeats = ResultItem.number_of_seats
        ? ResultItem.number_of_seats
        : null
    } else {
      this.noOfSeats = ResultItem.number_of_seats_available
        ? ResultItem.number_of_seats_available
        : null
    }
    this.luggageQuantity = ResultItem.luggage_quantity
      ? ResultItem.luggage_quantity
      : null
    this.isStatusPending = ResultItem.is_status_pending
      ? ResultItem.is_status_pending
      : null
    this.status = ResultItem.status ? ResultItem.status : null
    this.numberOfAssets = ResultItem.number_of_assets
      ? ResultItem.number_of_assets
      : null
    this.assetType = ResultItem.asset_type ? ResultItem.asset_type : null
    this.assetSensitivity = ResultItem.asset_sensitivity
      ? ResultItem.asset_sensitivity
      : null
    this.whomToDeliver = ResultItem.whom_to_deliver
      ? ResultItem.whom_to_deliver
      : null
    this.whomToDeliver = ResultItem.whom_to_deliver
      ? ResultItem.whom_to_deliver
      : null
    this.assetQuantity = ResultItem.assets_quantity
      ? ResultItem.assets_quantity
      : null
    this.travelMedium = ResultItem.travel_medium
      ? ResultItem.travel_medium
      : null
  }
  updateRideRequestStatus = () => {
    if (this.isStatusPending) this.isStatusPending = false
    else this.isStatusPending = true
  }
}
export default ResultITemModel
