import axios from "axios"

export default class FavoriteJobAdvertService{
    get() {
        return axios.get("http://localhost:8080/api/favoriteJobAdverts/getAll")
    }

    getById(userId, jobAdvertId) {
        return axios.get(`http://localhost:8080/api/favoriteJobAdverts/getFavorite?jobAdvertId=${jobAdvertId}&userId=${userId}`)
    }

    getByJobAdvert_Id(id) {
        return axios.get("http://localhost:8080/api/favoriteJobAdverts/getByJobAdvertId?id=" + id)
    }

    add(values) {
        return axios.post("http://localhost:8080/api/favoriteJobAdverts/add", values)
    }

    deleteByJobAdvertId(jobAdvertId) {
        return axios.delete("http://localhost:8080/api/favoriteJobAdverts/delete?jobAdvertId=" + jobAdvertId)
    }

    deleteById(id) {
        return axios.delete("http://localhost:8080/api/favoriteJobAdverts/deleteById?id=" + id)
    }


}

