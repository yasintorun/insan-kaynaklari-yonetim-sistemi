import React from 'react'
import _ from 'lodash'
import { Dropdown, Form } from 'semantic-ui-react'

const props = {
    min: 0,
    max: 0,
    defaultValue: 0,
    name: '',
    value: '',
    onChange: ()=>{},
}

export default function YTNumberDropdown({min=0, max=0, defaultValue=0, value='',  name, label ='', onChangeEvent, inverted=true}) {

    const getOptions = (number) => {
        let val = _.times(number, (index) => (index += min, {
            key: index,
            text: `${index}`,
            value: index,
        }))
        if(inverted)
            val = val.reverse()
        return val
    }

    return (
        <Form.Select
            label={label}
            name={name}
            search
            options={getOptions(max-min+1)}
            onChange={onChangeEvent}
            value={value}
            defaultValue={defaultValue}
        />


    )
}
/*
 5 2 -> 5, 4, 3, 2, 
        //1. Yöntem
        <select>
            {Array.from({ length: max - min + 1 }).map((_, i) => (
                <option>{i + min}</option>
            ))}
        </select>


        //2. Yöntem
        <Dropdown
            defaultValue={defaultValue}
            compact
            selection
            search
            options={getOptions(max-min+1)}
        />

        */
