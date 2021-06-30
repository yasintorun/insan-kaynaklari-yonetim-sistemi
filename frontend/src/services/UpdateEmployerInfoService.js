import axios from "axios"

export default class UpdateEmployerInfoService{
    get() {
        return axios.get("http://localhost:8080/api/updateEmployerInfo/getAll")
    }

    add(userId, values) {
        return axios.post(`http://localhost:8080/api/updateEmployerInfo/add?userId=` + userId, values)
    }

    getById(userId) {
        return axios.get("http://localhost:8080/api/updateEmployerInfo/getByUserId?userId=" + userId)
    }

    confirmByAdmin(userId) {
        return axios.post(`http://localhost:8080/api/updateEmployerInfo/confirmByAdmin?userId=` + userId)
    }

}