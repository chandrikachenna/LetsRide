import { LetsRideInfoStore } from '../../UserModule/stores/LetsRideInfoStore'
import LetsRideAPIService from '../../UserModule/services/LetsRideService/LetsRideService.fixture'

const letsRideInfoStore = new LetsRideInfoStore(new LetsRideAPIService())

export default { letsRideInfoStore }
