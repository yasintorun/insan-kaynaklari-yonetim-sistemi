import axios from "axios"
import Links from "../components/Links"

export default class ExperienceService{
    getExperience() {
        return axios.get(Links.ROOT + "/experiences/getAllExperiences")
    }

    getByUserId(userId) {
        return axios.get(Links.ROOT + "/experiences/getByUserId?userId=" + userId)
    }

    add(values) {
        return axios.post(Links.ROOT + "/experiences/addExperience", values)
    }

    update(values) {
        return axios.post(`${Links.ROOT}/experiences/updateExperience?id=${values.id}`, values)
    }
    
    delete(id) {
        return axios.delete(Links.ROOT + "/experiences/delete?id=" + id)
    }
}