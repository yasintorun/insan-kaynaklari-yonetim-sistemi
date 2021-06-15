import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisement()   {
        return  axios.get("http://localhost:8080/api/jobAdvertisements/getAllJobAdvertisement");
    }

    getJobAdvertisementById(id) {
        return  axios.get("http://localhost:8080/api/jobAdvertisements/getById?id=" + id);
    }

    add(values) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", values);
    }
}