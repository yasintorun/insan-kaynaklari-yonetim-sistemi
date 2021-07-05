import axios from "axios"

export default class CityService{
    async getCity() {
        return await axios.get("http://localhost:8080/api/cities/getAllCities")
    }
}