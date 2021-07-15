import axios from "axios"

export default class UserLanguageService{
    getByUserId(userId) {
        return axios.get("http://localhost:8080/api/languages/getByUserId?userId=" + userId)
    }

    update(values) {
        return axios.put("http://localhost:8080/api/languages/update", values)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/languages/add", values)
    }

    delete(id) {
        return axios.delete("http://localhost:8080/api/languages/deleteLanguage?id=" + id)
    }
}