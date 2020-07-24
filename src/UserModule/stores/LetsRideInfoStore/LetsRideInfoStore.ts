import { action, observable } from 'mobx'
import LetsRideService from '../../services/LetsRideService'
import { FormsInfoModel } from '../models/FormsInfoModel'
import { PaginationStore } from "../../../Common/stores/PaginationStore"
import { MatchingResultITemModel } from "../models/MatchingResultITemModel"

const LIMIT = 4
class LetsRideInfoStore {
  letsRideService: LetsRideService
  @observable formsInfo!: FormsInfoModel
  rideRideMatchingResultsInfo
  limit: number = LIMIT
  constructor(letsRideService: LetsRideService) {
    this.letsRideService = letsRideService
    this.rideRideMatchingResultsInfo = new PaginationStore(this.letsRideService.GetRideMatchingResults, this.limit, MatchingResultITemModel)

    this.init()
  }
  @action.bound
  init = () => {
    this.formsInfo = new FormsInfoModel(this.letsRideService)
  }
  @action.bound
  getRideMatchingResults = async () => {
    await this.rideRideMatchingResultsInfo.getEntities({})
  }
}
export { LetsRideInfoStore }
