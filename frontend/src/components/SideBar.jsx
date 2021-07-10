import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

export default function SideBar(props) {
    return (
        <div className="col-md-2 sidebar wrapper">
            <div>
                <h1 className="dashboard-header bold-header logo-header text-center">iKariyer</h1>
                <Divider />
                <Button.Group vertical fluid className="w-100" size="big">
                    {props.children}
                </Button.Group>
            </div>
        </div>
    )
}
