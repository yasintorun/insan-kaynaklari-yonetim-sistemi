import axios from "axios"
import Links from "../components/Links"

export default class JobAdvertisementService {
    getJobAdvertisement()   {
        return  axios.get(Links.ROOT + "/jobAdvertisements/getAllSortedJobAdvertisement");
    }

    getJobAdvertFilterAndPage(pageNo, pageSize, filterOption) {
        return axios.post(`${Links.ROOT} /jobAdvertisements/getAllJobAdvertisementWithPage?pageNo=${pageNo}&pageSize=${pageSize}`, filterOption)
    }

    getJobAdvertisementById(id) {
        return  axios.get(Links.ROOT + "/jobAdvertisements/getById?id=" + id);
    }

    add(values) {
        return axios.post(Links.ROOT + "/jobAdvertisements/add", values);
    }
    changeActive(isActive, id) {
        return axios.get(`${Links.ROOT} /jobAdvertisements/ChangeActive?isActive=${isActive}&jobAdvertisementId=${id}`)
    }

    getByEmployerUserId(userId) {
        return axios.get(Links.ROOT + "/jobAdvertisements/getByEmployerUserId?userId="+userId)
    }

    delete(id) {
        return axios.delete(Links.ROOT + "/jobAdvertisements/deleteJobAdvert?id=" + id)
    }
}