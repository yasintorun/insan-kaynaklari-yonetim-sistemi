import axios from "axios"
import Links from "../components/Links"

export default class SkillService{
    getSkill() {
        return axios.get(Links.ROOT + "/skills/getAllSkills")
    }



    getByUserId(userId) {
        return axios.get(Links.ROOT + "/skills/getByUserId?userId=" + userId)
    }

    update(resumeId, skillIds) {
        return axios.put(Links.ROOT + "/skills/update?resumeId="+resumeId, skillIds)
    } 
}