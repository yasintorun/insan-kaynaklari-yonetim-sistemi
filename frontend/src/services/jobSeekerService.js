
import axios from "axios"

import Links from "../components/Links"
export default class JobSeekerService{
    getJobSeeker() {
        return axios.get(Links.ROOT + "/jobseekers/getAllJobseekers")
    }

    add(jobseeker) {
        return axios.post(Links.ROOT + "/jobseekers/add", jobseeker)
    }
}
