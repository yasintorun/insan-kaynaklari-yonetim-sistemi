import axios from "axios"
import Links from "../components/Links"

export default class EducationService{
    getEducation() {
        return axios.get(Links.ROOT + "/educations/getAllEduation")
    }

    getByUserId(userId) {
        return axios.get(Links.ROOT + "/educations/getByUserId?userId=" + userId)
    }

    update(id, values) {
        return axios.post(`${Links.ROOT} /educations/update?id=${id}`, values)
    }

    add(values) {
        return axios.post(Links.ROOT + "/educations/add", values)
    }

    delete(id) {
        return axios.delete(Links.ROOT + "/educations/delete?id=" + id)
    }
}