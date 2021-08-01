import React from 'react'

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
