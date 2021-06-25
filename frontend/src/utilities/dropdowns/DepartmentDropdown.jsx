import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import DepartmentService from '../../services/departmentService'
export default function DepartmentDropDown({onChangeEvent, value}) {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        let departmentservice = new DepartmentService()
        departmentservice.getDepartments().then(result => setDepartments(result.data.data))
    }, [])
    return (
        <div>
            <Form.Select
                placeholder='Bölüm seçiniz'
                label="Bölüm"
                name="department"
                search
                options={departments.map((x, index) => {
                    return { text: x.departmentName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value = {value}
            />
        </div>
    )
}
