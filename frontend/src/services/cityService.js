import axios from "axios"
import Links from "../components/Links"

export default class CityService{
    async getCity() {
        return await axios.get(Links.ROOT + "/cities/getAllCities")
    }
}