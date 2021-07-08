import axios from "axios"

export default class ExperienceService{
    getExperience() {
        return axios.get("http://localhost:8080/api/experiences/getAllExperiences")
    }

    getByUserId(userId) {
        return axios.get("http://localhost:8080/api/experiences/getByUserId?userId=" + userId)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/experiences/addExperience", values)
    }

    update(id, values) {
        return axios.post(`http://localhost:8080/api/experiences/updateExperience?id=${id}`, values)
    }
    
    delete(id) {
        return axios.delete("http://localhost:8080/api/experiences/delete?id=" + id)
    }
}