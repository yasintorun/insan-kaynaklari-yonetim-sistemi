import React, { useEffect, useState } from 'react'
import JobPositionService from '../../services/jobPositionService'
import { Form } from 'semantic-ui-react'
export default function JobPositionDropDown({onChangeEvent, value}) {
    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
    }, [])
    return (
        <div>
            <Form.Select
                placeholder='iş Pozisyonu seçiniz'
                label="iş Pozisyonu"
                name="jobPosition"
                search
                options={jobPositions.map((x, index) => {
                    return { text: x.jobName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value = {value}
            />
        </div>
    )
}
