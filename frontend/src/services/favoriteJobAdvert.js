import axios from "axios"

export default class FavoriteJobAdvertService{
    get() {
        return axios.get("http://localhost:8080/api/favoriteJobAdverts/getAll")
    }

    getByJobAdvert_Id(id) {
        return axios.get("http://localhost:8080/api/favoriteJobAdverts/getByJobAdvertId?id=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/favoriteJobAdverts/add", values)
    }
}