import { action, observable } from 'mobx'
import LetsRideService from '../../services/LetsRideService'
import { FormsInfoModel } from '../models/FormsInfoModel'
import { PaginationStore } from '../../../Common/stores/PaginationStore'
import { MatchingResultITemModel } from '../models/MatchingResultITemModel'

const LIMIT = 4
class LetsRideInfoStore {
  letsRideService: LetsRideService
  @observable formsInfo!: FormsInfoModel
  @observable rideMatchingResultsInfo
  @observable assetMatchingResultsInfo
  limit: number = LIMIT
  constructor(letsRideService: LetsRideService) {
    this.letsRideService = letsRideService
    this.init()
  }
  @action.bound
  init = () => {
    this.formsInfo = new FormsInfoModel(this.letsRideService)
    this.rideMatchingResultsInfo = new PaginationStore(
      this.letsRideService.GetRideMatchingResults,
      this.limit,
      MatchingResultITemModel
    )
    this.assetMatchingResultsInfo = new PaginationStore(
      this.letsRideService.GetAssetMatchingResults,
      this.limit,
      MatchingResultITemModel
    )
  }
  @action.bound
  getRideMatchingResults = async requestObject => {
    await this.rideMatchingResultsInfo.getEntitiesList(requestObject)
  }
}
export { LetsRideInfoStore }
