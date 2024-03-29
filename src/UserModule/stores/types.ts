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

interface MatchingResultObject extends BasicFormInfoObject {
  accepted_person_details: PersonDetails
  id: number
  is_status_pending: boolean
}
export interface RidesMatchingResultObject extends MatchingResultObject {
  number_of_seats: number
  luggage_quantity: number
}
export interface GetRidesMatchingResultsRequest {
  data: Array<RidesMatchingResultObject>
  total_count: number
}

export interface AssestMatchingResultObject extends MatchingResultObject {
  number_of_assets: number,
  asset_type: string,
  asset_sensitivity: string,
  whom_to_deliver: string
}
export interface GetAssestMatchingResultsRequest {
  data: Array<AssestMatchingResultObject>
  total_count: number
}
export interface RequestInfoWithDetails {
  order_by: string,
  sort_by: string,
  filter_by: string
}

export interface MyRequestObject extends BasicFormInfoObject {
  accepted_person_details: PersonDetails
  status: string
}

export interface MyRideRequestObject extends MyRequestObject {
  number_of_seats: number
  luggage_quantity: number
}
export interface GetMyRideRequest {
  data: Array<MyRideRequestObject>
  total_count: number
}
export interface MyAssetRequestObject extends MyRequestObject {
  number_of_assets: number,
  asset_type: string,
  asset_sensitivity: string,
  whom_to_deliver: string
}

export interface GetMyAssetRequest {
  data: Array<MyAssetRequestObject>
  total_count: number
}


export interface SharedRideDetailsObject extends BasicFormInfoObject {
  number_of_seats_available: number,
  assets_quantity: number,
  status: string
}
export interface GetSharedRideDetailsRequest {
  data: Array<SharedRideDetailsObject>
  total_count: number
}
export interface SharedTravelInfoObject extends BasicFormInfoObject {
  travel_medium: string,
  assets_quantity: number,
  status: string
}
export interface GetSharedTravelInfoRequest {
  data: Array<SharedTravelInfoObject>
  total_count: number
}