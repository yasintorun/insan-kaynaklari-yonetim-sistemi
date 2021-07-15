import axios from "axios"
import Links from "../components/Links"

export default class EmployerService{
    getEmployer() {
        return axios.get(Links.ROOT + "/employers/getAllEmployer")
    }

    getById(id) {
        return axios.get(Links.ROOT + "/employers/getById?userId=" + id)
    }

    add(employer) {
        return axios.post(Links.ROOT + "/employers/add", employer)
    }
}