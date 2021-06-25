import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import WorkTimeStyleService from '../../services/workTimeService'
export default function WorkTimeStyleDropdown({onChangeEvent, value}) {
    const [workTimeStyle, setWorkTimeStyle] = useState([])

    useEffect(() => {
        let workTimeStyleService = new WorkTimeStyleService()
        workTimeStyleService.getWorkTimeStyles().then(result => setWorkTimeStyle(result.data.data))
      }, [])
    return (
        <div>
            <Form.Select
                placeholder='Çalışma özelligi'
                label="Çalışma zamanı özelliği"
                name="workTimeStyle"
                search
                options={workTimeStyle.map((x, index) => {
                    return { text: x.name, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value= {value}
            />
        </div>
    )
}
