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
      console.log(apiStatus);

      this.getEntitiesListAPIStatus = apiStatus
   }
   @action.bound
   setGetEntitiesListAPIError(error) {
      console.log(error);
      this.getEntitiesListAPIError = error
   }
   @action.bound
   setEntitiesListResponse(response) {
      const { entityModel } = this
      this.totalPages = Math.ceil(response.total_count / this.limit)
      this.entitiesList = response.data.map(item => new entityModel(item))
      // this.entityModel = response
   }
   @action.bound
   getEntitiesList(details) {
      console.log('service');

      const promise = this.service(this.limit, this.offset, details)
      return bindPromiseWithOnSuccess(promise)
         .to(this.setGetEntitiesListAPIStatus, this.setEntitiesListResponse)
         .catch(this.setGetEntitiesListAPIError)
   }
   @action.bound
   pagination(value) {
      this.currentPage = parseInt(value)
      // return this.getEntitiesList()
   }
}
export { PaginationStore }
