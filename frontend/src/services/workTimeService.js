import axios from "axios"

import Links from "../components/Links"
export default class WorkTimeStyleService{
    getWorkTimeStyles() {
        return axios.get(Links.ROOT + "/workTimeStyle/getAllWorkTimeStyles")
    }
}