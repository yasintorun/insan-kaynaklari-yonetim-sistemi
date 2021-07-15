import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider } from 'semantic-ui-react'

export default function SideBar(props) {
    return (
        <div className="col-md-2 sidebar wrapper">
            <div>
                <Link to="/" className="h2 d-block  bold-header logo-header text-center">iKariyer</Link>
                <Divider />
                <Button.Group vertical fluid className="w-100" size="big">
                    {props.children}
                </Button.Group>
            </div>
        </div>
    )
}
