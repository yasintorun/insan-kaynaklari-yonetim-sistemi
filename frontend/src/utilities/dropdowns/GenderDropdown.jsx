import React, { useState } from 'react'
import { useEffect } from 'react'
import GenderService from '../../services/GenderService'
import { Dropdown, Form } from 'semantic-ui-react'
export default function GenderDropdown({onChangeEvent}) {
    const [genders, setGenders] = useState([])

    useEffect(() => {
        let genderService = new GenderService()
        genderService.getGenders().then(result => setGenders(result.data.data));
    }, [])

    return (
        <div>
            <Form.Select
            placeholder='Cinsiyet seç'
            label="Cinsiyet*"
            options={genders.map((x, index) => {
                return { text: x.name, key: index, value: x.id }
              })}
              onChange= {onChangeEvent}
              name = "gender"
            />
        </div>
    )
}
