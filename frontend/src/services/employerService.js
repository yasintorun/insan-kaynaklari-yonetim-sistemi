import axios from "axios"

export default class EmployerService{
    getEmployer() {
        return axios.get("http://localhost:8080/api/employers/getAllEmployer")
    }
    add(employer) {
        return axios.post("http://localhost:8080/api/employers/add", employer)
    }
}