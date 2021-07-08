import axios from "axios"
export default class ResumeService {
    
    getResume() {
        return axios.get("http://localhost:8080/api/resume/getAllResume")
    }

    getResumeById(id) {
        return  axios.get("http://localhost:8080/api/resume/getById?id=" + id);
    }

    update(id, values) {
        return axios.post(`http://localhost:8080/api/resume/update?id=${id}`, values)
    }

    updateResumeSummary(id, summary) {
        return axios.post(`http://localhost:8080/api/resume/updateSummary?id=${id}`, summary)
    }
}