import axios from "axios"

import Links from "../components/Links"
export default class JobPositionService{
    getJobPosition() {
        return axios.get(Links.ROOT + "/jobPositions/getAllJobs")
    }
}