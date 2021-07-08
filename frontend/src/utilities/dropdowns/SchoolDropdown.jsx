import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import SchoolService from '../../services/schoolService'
export default function SchoolDropDown({onChangeEvent, value}) {
    const [schools, setSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService()
        schoolService.getSchool().then(result => setSchools(result.data.data))
       // console.log(schools)
    }, [])
    return (
        <div>
            <Form.Select
                placeholder='Üniversite seçiniz'
                label="Üniversite"
                name="school"
                search
                options={schools.map((x, index) => {
                    return { text: x.schoolName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value = {value}
            />
        </div>
    )
}
