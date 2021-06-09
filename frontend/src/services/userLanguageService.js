import axios from "axios"

export default class UserLanguageService{
    getLanguage() {
        return axios.get("http://localhost:8080/api/languages/getAllLanguages")
    }
}