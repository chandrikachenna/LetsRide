import { observable } from 'mobx'
import { RidesMatchingResultObject } from '../../types'
const rideRequestStatus = { pending: 'Pending', accepted: 'Accepted' }
class MatchingResultITem {
  id
  fromPlace
  toPlace
  isFlexible
  fromDateTime
  toDateTime
  acceptedPersonDetails
  noOfSeats
  luggageQuantity
  @observable rideRequestStatus
  constructor(matchingResultItem: RidesMatchingResultObject) {
    this.id = matchingResultItem.id
    this.fromPlace = matchingResultItem.from_place
    this.toPlace = matchingResultItem.to_place
    this.isFlexible = matchingResultItem.is_flexible
    this.fromDateTime = matchingResultItem.from_date_time
    this.toDateTime = matchingResultItem.to_date_time
    this.noOfSeats = matchingResultItem.number_of_seats
    this.luggageQuantity = matchingResultItem.luggage_quantity
    this.rideRequestStatus = matchingResultItem.ride_request_status
  }
  updateRideRequestStatus = () => {
    if (this.rideRequestStatus.match(rideRequestStatus.pending))
      this.rideRequestStatus = rideRequestStatus.accepted
    else this.rideRequestStatus = rideRequestStatus.pending
  }
}
export default MatchingResultITem
