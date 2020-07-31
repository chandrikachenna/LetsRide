import { observable } from 'mobx'
import { RidesMatchingResultObject } from '../../types'
const isStatusPending = { pending: 'Pending', accepted: 'Accepted' }
class MatchingResultITemModel {
  id
  fromPlace
  toPlace
  isFlexible
  fromDateTime
  toDateTime
  acceptedPersonDetails
  noOfSeats
  luggageQuantity
  @observable isStatusPending
  constructor(matchingResultItem: RidesMatchingResultObject) {
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
    this.luggageQuantity = matchingResultItem.luggage_quantity
    this.isStatusPending = matchingResultItem.is_status_pending
  }
  updateRideRequestStatus = () => {
    if (this.isStatusPending.match(isStatusPending.pending))
      this.isStatusPending = isStatusPending.accepted
    else this.isStatusPending = isStatusPending.pending
  }
}
export default MatchingResultITemModel
