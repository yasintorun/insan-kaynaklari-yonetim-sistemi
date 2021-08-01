import axios from "axios"
import Links from "../components/Links"
export default class ResumeService {
    
    getResume() {
        return axios.get(Links.ROOT + "/resume/getAllResume")
    }

    getResumeById(id) {
        return  axios.get(Links.ROOT + "/resume/getById?id=" + id);
    }

    update(values) {
        return axios.post(`${Links.ROOT}/resume/update?id=${values.id}`, values)
    }

    updateResumeSummary(id, summary) {
        return axios.post(`${Links.ROOT}/resume/updateSummary?id=${id}`, summary)
    }

    updateResumePhoto(id, file) {
        return axios.post(`${Links.ROOT}/resume/updatePhoto?id=${id}`, file)
    }

    deleteUserPhoto(resumeId) {
        return axios.delete(Links.ROOT + "/resume/deleteUserPhoto?resumeId=" + resumeId)
    }
    
}