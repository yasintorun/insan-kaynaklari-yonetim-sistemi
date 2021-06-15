import axios from "axios"

export default class WorkTimeStyleService{
    getWorkTimeStyles() {
        return axios.get("http://localhost:8080/api/workTimeStyle/getAllWorkTimeStyles")
    }
}