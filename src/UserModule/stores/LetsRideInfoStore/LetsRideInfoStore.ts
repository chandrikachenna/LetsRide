import { action, observable } from "mobx"
import LetsRideService from "../../services/LetsRideService"
import { FormsInfoModel } from "../FormsInfoModel"


class LetsRideInfoStore {
    letsRideService: LetsRideService
    @observable formsInfo!: FormsInfoModel
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