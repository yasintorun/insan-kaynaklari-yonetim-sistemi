import { Button } from 'semantic-ui-react'
import React from 'react'
import GenderDropdown from '../dropdowns/GenderDropdown'

export default function YTInfoMessage(props) {
    return (
        <div>
            <div className="message-item mt-4">
                <p className="text-muted secondary-text">{props.info}</p>
                <p className="primary-text">{props.text ? props.text : "Girilmedi"}</p>
            </div>
        </div>
    )
}
