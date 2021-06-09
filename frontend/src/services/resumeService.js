import axios from "axios"
export default class ResumeService {
    
    getResume() {
        return axios.get("http://localhost:8080/api/resume/getAllResume")
    }
}