import axios from "axios"
import Links from "../components/Links"

export default class WorkStyleService{
    getWorkStyles() {
        return axios.get(Links.ROOT + "/workStyle/getAllWorkStyles")
    }
}