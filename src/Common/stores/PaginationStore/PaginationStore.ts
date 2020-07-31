import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

class PaginationStore {
  offset
  limit
  service
  entityModel
  @observable currentPage
  @observable getEntitiesListAPIStatus
  @observable getEntitiesListAPIError
  @observable entitiesList
  @observable totalPages
  @observable details
  @observable totalCount
  constructor(service, limit, entityModel) {
    this.limit = limit
    this.service = service
    this.entityModel = entityModel
    this.init()
  }
  @action.bound
  init() {
    this.offset = 0
    this.getEntitiesListAPIError = null
    this.getEntitiesListAPIStatus = API_INITIAL
    this.entitiesList = []
    this.currentPage = 1
    this.totalPages = 0
  }
  @action.bound
  setGetEntitiesListAPIStatus(apiStatus) {
    this.getEntitiesListAPIStatus = apiStatus
  }
  @action.bound
  setGetEntitiesListAPIError(error) {
    this.getEntitiesListAPIError = error
  }
  @action.bound
  setEntitiesListResponse(response) {
    const { entityModel } = this
    if (this.totalPages < this.currentPage) {
      this.currentPage = 1
    }
    this.totalCount = response.total_count
    this.totalPages = Math.ceil(response.total_count / this.limit)
    this.entitiesList = response.data.map(item => new entityModel(item))
  }
  @action.bound
  getEntitiesList(details) {

    this.details = details
    let offset = Math.ceil(this.limit * (this.currentPage - 1))

    const promise = this.service(this.limit, offset, details)
    return bindPromiseWithOnSuccess(promise)
      .to(this.setGetEntitiesListAPIStatus, this.setEntitiesListResponse)
      .catch(this.setGetEntitiesListAPIError)
  }
  @action.bound
  pagination(value) {
    this.currentPage = parseInt(value)
    console.log(this.currentPage);

    this.getEntitiesList(this.details)
  }
}
export { PaginationStore }
