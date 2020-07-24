import { action, observable } from 'mobx'
import LetsRideService from '../../services/LetsRideService'
import { FormsInfoModel } from '../models/FormsInfoModel'
import { APIStatus, API_INITIAL } from "@ib/api-constants"
import { MatchingResultITem } from "../models/MatchingResultITem"
import { GetMatchingResultsRequest } from "../types"

class LetsRideInfoStore {
  letsRideService: LetsRideService
  @observable formsInfo!: FormsInfoModel

  @observable rideRideMatchingResultsInfo
  constructor(letsRideService: LetsRideService) {
    this.letsRideService = letsRideService
    this.init()
  }
  @action.bound
  init = () => {
    this.formsInfo = new FormsInfoModel(this.letsRideService)
  }

}
export { LetsRideInfoStore }
