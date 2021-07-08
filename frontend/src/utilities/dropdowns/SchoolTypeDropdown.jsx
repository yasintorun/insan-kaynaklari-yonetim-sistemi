import React from 'react'

import { Form } from 'semantic-ui-react'
export default function SchoolTypeDropdown({onChangeEvent, value}) {

    const options = [
        { key: 1, text: 'Ön Lisans', value: 1 },
        { key: 2, text: 'Lisans', value: 2 },
        { key: 3, text: 'Yüksek Lisans', value: 3 },
        { key: 4, text: 'Doktora', value: 4 },
      ]

    return (
        <div>
            <Form.Select
                label="Eğitim tipi"
                name="schoolType"
                defaultValue = {1}
                options={options}
                onChange={onChangeEvent}
                value = {value}
            />
        </div>
    )
}
