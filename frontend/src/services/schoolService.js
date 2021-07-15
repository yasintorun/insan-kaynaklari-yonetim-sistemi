import axios from "axios"

import Links from "../components/Links"
export default class SchoolService{
    getSchool() {
        return axios.get(Links.ROOT + "/schools/getAllSchool")
    }

    update(id, values) {
        return axios.post(``)
    }
}