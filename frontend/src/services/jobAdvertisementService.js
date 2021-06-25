import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisement()   {
        return  axios.get("http://localhost:8080/api/jobAdvertisements/getAllSortedJobAdvertisement");
    }

    getJobAdvertFilterWithPage(pageNo, pageSize, filterOption) {
        return axios.post(`http://localhost:8080/api/jobAdvertisements/getAllJobAdvertisementWithPage?pageNo=${pageNo}&pageSize=${pageSize}`, filterOption)
    }

    getJobAdvertisementById(id) {
        return  axios.get("http://localhost:8080/api/jobAdvertisements/getById?id=" + id);
    }

    add(values) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", values);
    }
    changeActive(isActive, id) {
        return axios.get(`http://localhost:8080/api/jobAdvertisements/ChangeActive?isActive=${isActive}&jobAdvertisementId=${id}`)
    }
}