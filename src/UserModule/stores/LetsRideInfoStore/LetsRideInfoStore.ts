import { action, observable } from 'mobx'
import LetsRideService from '../../services/LetsRideService'
import { FormsInfoModel } from '../models/FormsInfoModel'
import { PaginationStore } from '../../../Common/stores/PaginationStore'
import { ResultITemModel } from '../models/ResultITemModel'

const LIMIT = 4
class LetsRideInfoStore {
  letsRideService: LetsRideService
  @observable formsInfo!: FormsInfoModel
  @observable rideMatchingResultsInfo
  @observable assetMatchingResultsInfo
  @observable myRideRequestsInfo
  @observable myAssetRequestsInfo
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
      ResultITemModel
    )
    this.assetMatchingResultsInfo = new PaginationStore(
      this.letsRideService.GetAssetMatchingResults,
      this.limit,
      ResultITemModel
    )
    this.myRideRequestsInfo = new PaginationStore(
      this.letsRideService.GetMyRideRequests,
      this.limit,
      ResultITemModel
    )
    this.myAssetRequestsInfo = new PaginationStore(
      this.letsRideService.GetMyAssetRequests,
      this.limit,
      ResultITemModel
    )
  }
  @action.bound
  getRideMatchingResults = async requestObject => {
    await this.rideMatchingResultsInfo.getEntitiesList(requestObject)
  }
}
export { LetsRideInfoStore }
