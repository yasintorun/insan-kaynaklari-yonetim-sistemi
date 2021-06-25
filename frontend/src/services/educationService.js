import axios from "axios"

export default class EducationService{
    getEducation() {
        return axios.get("http://localhost:8080/api/educations/getAllEduation")
    }

    update(id, values) {
        return axios.post(`http://localhost:8080/api/educations/update?id=${id}`, values)
    }
}