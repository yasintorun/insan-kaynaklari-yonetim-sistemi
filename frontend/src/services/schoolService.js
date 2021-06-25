import axios from "axios"

export default class SchoolService{
    getSchool() {
        return axios.get("http://localhost:8080/api/schools/getAllSchool")
    }

    update(id, values) {
        return axios.post(``)
    }
}