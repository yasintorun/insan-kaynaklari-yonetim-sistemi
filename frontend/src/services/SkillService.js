import axios from "axios"

export default class SkillService{
    getSkill() {
        return axios.get("http://localhost:8080/api/skills/getAllSkills")
    }



    getByUserId(userId) {
        return axios.get("http://localhost:8080/api/skills/getByUserId?userId=" + userId)
    }

    update(values) {
        return axios.put("http://localhost:8080/api/skills/update", values)
    } 
}