import axios from "axios"
import Links from "../components/Links"

export default class FavoriteJobAdvertService{
    get() {
        return axios.get(Links.ROOT + "/favoriteJobAdverts/getAll")
    }

    getById(userId, jobAdvertId) {
        return axios.get(`${Links.ROOT}/favoriteJobAdverts/getFavorite?jobAdvertId=${jobAdvertId}&userId=${userId}`)
    }

    getByJobAdvert_Id(id) {
        return axios.get(Links.ROOT + "/favoriteJobAdverts/getByJobAdvertId?id=" + id)
    }

    add(values) {
        return axios.post(Links.ROOT + "/favoriteJobAdverts/add", values)
    }

    deleteByJobAdvertId(jobAdvertId) {
        return axios.delete(Links.ROOT + "/favoriteJobAdverts/delete?jobAdvertId=" + jobAdvertId)
    }

    deleteById(id) {
        return axios.delete(Links.ROOT + "/favoriteJobAdverts/deleteById?id=" + id)
    }


}

