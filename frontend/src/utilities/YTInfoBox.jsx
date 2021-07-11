import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function YTInfoBox(props) {
    return (
        <div className="col-lg-4 mb-4 mb-lg-0" style={{ color: '#969696' }}>
            <div className={`YTInfoBox text-light ${props.bgColor}`}>
                <div className="ps-3">
                    <Icon name={props.icon} size="large" color={props.iconColor ? props.iconColor : "white"} />
                </div>

                <div className="text-small ps-3">{props.message}</div>
                <div className="statistics-counter ">
                    <h3 className="text-light">{props.statistics}</h3>
                </div>
            </div>
        </div>
    )
}
