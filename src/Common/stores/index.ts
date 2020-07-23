import { LetsRideInfoStore } from "../../UserModule/stores/LetsRideInfoStore"
import LetsRideAPIService from "../../UserModule/services/LetsRideService/LetsRideService.api"

const letsRideInfoStore = new LetsRideInfoStore(new LetsRideAPIService())

export default { letsRideInfoStore }