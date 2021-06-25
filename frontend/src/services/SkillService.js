import axios from "axios"

export default class SkillService{
    getSkill() {
        return axios.get("http://localhost:8080/api/skills/getAllSkills")
    }
}