import axios from "axios"

export default class PersonalService{
    getPersonal() {
        return axios.get("http://localhost:8080/api/personels/getAllUsers")
    }

    getById(id) {
        return axios.get("http://localhost:8080/api/personels/getPersonelByUserId?id=" + id)
    }
    
    update(values) {
        return axios.post(`http://localhost:8080/api/personels/update`, values)
    }
}