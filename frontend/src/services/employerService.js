import axios from "axios"

export default class EmployerService{
    getEmployer() {
        return axios.get("http://localhost:8080/api/employers/getAllEmployer")
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/employers/getById?userId=" + id)
    }

    add(employer) {
        return axios.post("http://localhost:8080/api/employers/add", employer)
    }
}