import axios from "axios"

export default class UserSkillService{
    getSkill() {
        return axios.get("http://localhost:8080/api/skills/getAllSkills")
    }
}