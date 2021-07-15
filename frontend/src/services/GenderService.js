import axios from "axios"
import Links from "../components/Links"

export default class GenderService{
    getGenders() {
        return axios.get(Links.ROOT + "/genders/getAllCities")
    }
}