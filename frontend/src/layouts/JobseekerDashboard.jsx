import React from 'react'

import { Button, Icon } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdvertisement from './../pages/JobAdvertisementList'
import { NavLink } from 'react-router-dom'
export default function JobseekerDashboard() {
    return (
        <div>
            <div className="row">
                <div className="col-md-2 sidebar fixed-left">
                    <h1 className="dashboard-header bold-header text-center">iKariyer</h1>
                    <Button.Group vertical fluid className="w-100" size="big" color="teal">
                        <Button className="p-4"><Icon name="user"/>Profil</Button>
                        <Button className="p-4"><Icon name="gg"/>Özgeçmiş</Button>
                        <Button className="p-4" as={NavLink} to="/jobseeker_dashboard/isilani">
                            <Icon name="list"/>
                            İş ilanları
                        </Button>
                        <Button className="p-4"><Icon name="bullhorn"/>Duyurular</Button>
                    </Button.Group>
                </div>
                <div className="col-md-10 container-content">
                    <Route path="/jobseeker_dashboard/isilani" component={JobAdvertisement}/>
                </div>
            </div>
        </div>
    )
}
