import React from 'react'
import { Label } from 'semantic-ui-react'

export default function IsApprovedIcon(props) {
    return (
        <span>
            {
                props.isActive
                ? <Label color="green"> &#10004; </Label>
                : <Label color="red">&#10008;</Label>
            }
        </span>
    )
}
