import axios from "axios"

export default class EducationService{
    getEducation() {
        return axios.get("http://localhost:8080/api/educations/getAllEduation")
    }

    getByUserId(userId) {
        return axios.get("http://localhost:8080/api/educations/getByUserId?userId=" + userId)
    }

    update(id, values) {
        return axios.post(`http://localhost:8080/api/educations/update?id=${id}`, values)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/educations/add", values)
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/educations/delete?id=" + id)
    }
}