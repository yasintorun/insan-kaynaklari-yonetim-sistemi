import axios from "axios"

export default class WorkStyleService{
    getWorkStyles() {
        return axios.get("http://localhost:8080/api/workStyle/getAllWorkStyles")
    }
}