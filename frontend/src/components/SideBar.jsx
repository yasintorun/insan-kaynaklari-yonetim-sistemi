import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SideBar(props) {
    return (
        <div className="col-md-2 sidebar fixed-left">
            <h1 className="dashboard-header bold-header text-center">iKariyer</h1>
            <Button.Group vertical fluid className="w-100" size="big" color="teal">
                {props.children}
            </Button.Group>
        </div>
    )
}
