import axios from "axios"

import Links from "../components/Links"
export default class PersonalService{
    getPersonal() {
        return axios.get(Links.ROOT + "/personels/getAllUsers")
    }

    getById(id) {
        return axios.get(Links.ROOT + "/personels/getPersonelByUserId?id=" + id)
    }
    
    update(values) {
        return axios.post(`${Links.ROOT} /personels/update`, values)
    }
}