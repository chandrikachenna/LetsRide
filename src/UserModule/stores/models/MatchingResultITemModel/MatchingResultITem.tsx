import { observable } from 'mobx'
import {
  RidesMatchingResultObject,
  AssestMatchingResultObject
} from '../../types'

class MatchingResultITemModel {
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
  whom_to_deliver
  @observable isStatusPending: boolean
  constructor(matchingResultItem) {
    this.id = matchingResultItem.id
    this.fromPlace = matchingResultItem.from_place
    this.toPlace = matchingResultItem.to_place
    this.isFlexible = matchingResultItem.is_flexible
    this.fromDateTime = matchingResultItem.from_date_time
    this.toDateTime = matchingResultItem.to_date_time
    this.acceptedPersonDetails = {
      name: matchingResultItem.accepted_person_details.name,
      mobileNumber: matchingResultItem.accepted_person_details.mobile_number
    }
    this.noOfSeats = matchingResultItem.number_of_seats
      ? matchingResultItem.number_of_seats
      : null
    this.luggageQuantity = matchingResultItem.luggage_quantity
      ? matchingResultItem.luggage_quantity
      : null
    this.isStatusPending = matchingResultItem.is_status_pending
    this.numberOfAssets = matchingResultItem.numberOfAssets
      ? matchingResultItem.numberOfAssets
      : null
    this.assetType = matchingResultItem.asset_type
      ? matchingResultItem.asset_type
      : null
    this.assetSensitivity = matchingResultItem.assetSensitivity
      ? matchingResultItem.assetSensitivity
      : null
    this.whom_to_deliver = matchingResultItem.whom_to_deliver
      ? matchingResultItem.whom_to_deliver
      : null
  }
  updateRideRequestStatus = () => {
    if (this.isStatusPending) this.isStatusPending = false
    else this.isStatusPending = true
  }
}
export default MatchingResultITemModel
