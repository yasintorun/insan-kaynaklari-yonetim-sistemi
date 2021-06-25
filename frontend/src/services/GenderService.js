import axios from "axios"

export default class GenderService{
    getGenders() {
        return axios.get("http://localhost:8080/api/genders/getAllCities")
    }
}