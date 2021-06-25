import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import SkillService from '../../services/SkillService'
export default function SkillDropDown({onChangeEvent, value}) {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        let skillService = new SkillService()
        skillService.getSkill().then(result => setSkills(result.data.data))
    }, [])
    return (
        <div>
            <Form.Select
                placeholder='Yetenek seçiniz'
                label="Yetenek"
                name="skill"
                search
                options={skills.map((x, index) => {
                    return { text: x.skillName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value = {value}
            />
        </div>
    )
}
