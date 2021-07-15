import axios from "axios"
import Links from "../components/Links"

export default class UserLanguageService{
    getByUserId(userId) {
        return axios.get(Links.ROOT + "/languages/getByUserId?userId=" + userId)
    }

    update(values) {
        return axios.put(Links.ROOT + "/languages/update", values)
    }

    add(values) {
        return axios.post(Links.ROOT + "/languages/add", values)
    }

    delete(id) {
        return axios.delete(Links.ROOT + "/languages/deleteLanguage?id=" + id)
    }
}