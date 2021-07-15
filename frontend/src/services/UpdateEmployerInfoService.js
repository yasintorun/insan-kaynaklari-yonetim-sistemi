import axios from "axios"
import Links from "../components/Links"

export default class UpdateEmployerInfoService{
    get() {
        return axios.get(Links.ROOT + "/updateEmployerInfo/getAll")
    }

    add(userId, values) {
        return axios.post(`${Links.ROOT} /updateEmployerInfo/add?userId=` + userId, values)
    }

    getById(userId) {
        return axios.get(Links.ROOT + "/updateEmployerInfo/getByUserId?userId=" + userId)
    }

    confirmByAdmin(userId) {
        return axios.post(`${Links.ROOT} /updateEmployerInfo/confirmByAdmin?userId=` + userId)
    }

}