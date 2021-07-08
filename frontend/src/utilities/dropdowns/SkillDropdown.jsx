import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import SkillService from '../../services/SkillService'
export default function SkillDropDown({onChangeEvent, defaultValue, isMultiple}) {
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
                multiple = {isMultiple}
                options={skills.map((x, index) => {
                    return { text: x.skillName, key: index, value: x.id }
                })}
                onChange={onChangeEvent}
                defaultValue = {defaultValue}
            />
        </div>
    )
}
