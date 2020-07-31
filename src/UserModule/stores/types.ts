export interface BasicFormInfoObject {
  from_place: string
  to_place: string
  is_flexible: boolean
  from_date_time: string
  to_date_time: string
}

export interface UpdateRideRequest extends BasicFormInfoObject {
  number_of_seats: number
  luggage_quantity: number
}
export interface UpdateAsserTransportRequest extends BasicFormInfoObject {
  number_of_assets: number
  asset_type: string
  is_asset_type_other: boolean
  other_asset_type: string
  asset_sensitivity: string
  whom_to_deliver: string
}
export interface UpdateShareRide extends BasicFormInfoObject {
  number_of_seats_available: number
  assets_quantity: number
}
export interface UpdateShareTravelInfo extends BasicFormInfoObject {
  travel_medium: string
  assets_quantity: number
}

type FilterStatus = 'Pending' | 'Accepted' | 'All'

export interface RequestMatchingResultsWithFilter {
  filter_by: FilterStatus
}

interface PersonDetails {
  name: string
  mobile_number: number
}

type RequestStatus = 'Pending' | 'Accepted'
export interface RidesMatchingResultObject {
  from_place: string
  to_place: string
  is_flexible: boolean
  from_date_time: string
  to_date_time: string
  accepted_person_details: PersonDetails
  id: number
  // ride_request_status: string
  is_status_pending: boolean
  number_of_seats: number
  luggage_quantity: number
}
export interface GetMatchingResultsRequest {
  data: Array<RidesMatchingResultObject>
  total_count: number
}