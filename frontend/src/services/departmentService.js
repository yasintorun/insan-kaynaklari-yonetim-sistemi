import axios from "axios"
import Links from "../components/Links"

export default class DepartmentService{
    getDepartments() {
        return axios.get(Links.ROOT + "/departments/getAll")
    }
}