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
