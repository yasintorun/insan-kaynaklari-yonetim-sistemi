import React, { useEffect, useState } from 'react'
import CityService from '../../services/cityService'
import { Form } from 'semantic-ui-react'
export default function CityDropDown({onChangeEvent, value}) {
    const [cities, setCities] = useState([])

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCity().then(result => setCities(result.data.data))
    }, [])
    return (
        <div>
            <Form.Select
                placeholder='Şehir seçiniz'
                label="Şehir"
                name="city"
                search
                options={cities.map((x, index) => {
                    return { text: x.cityName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value = {value}
            />
        </div>
    )
}
