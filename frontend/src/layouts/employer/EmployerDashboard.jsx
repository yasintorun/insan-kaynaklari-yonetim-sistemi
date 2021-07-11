import React from 'react'

import { Button, Icon, Label } from 'semantic-ui-react'
import { Route } from 'react-router'

import EmployerProfile from '../../pages/employer/EmployerProfile'
import { NavLink } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import EmployerHome from '../../pages/employer/EmployerHome'
export default function EmployerDashboard() {
    return (
        <div>
            <div className="row">
                <SideBar>
                    <Button className="p-4 theme-bg" as={NavLink} to="/employer_dashboard">
                        <Icon name="user" />
                        Anasayfa
                    </Button>
                    <Button className="p-4 theme-bg" as={NavLink} to="/employer_dashboard/profile">
                        <Icon name="user" />
                        Genel Bilgiler
                    </Button>
                    <Button className="p-4 theme-bg" as={NavLink} to="/employer_dashboard/my-job-advertisements">
                        <Icon name="list" />
                        İş ilanlarım
                    </Button>
                    <Button className="p-4 theme-bg" as={NavLink} to="/employer_dashboard/duyurular">
                        <Icon name="bullhorn" />
                        Duyurular
                    </Button>
                </SideBar>
                <div className="col-md-10 container-content">
                    <Route exact path="/employer_dashboard" component={EmployerHome} />
                    <Route exact path="/employer_dashboard/profile" component={EmployerProfile} />
                    <Route path="/employer_dashboard/my-job-advertisements" component={""} />
                    <Route path="/employer_dashboard/duyurular" component={""} />
                </div>
            </div>
        </div>
    )
}

/**
 *
 *  <div className="col-md-2 sidebar fixed-left">
                    <h1 className="dashboard-header bold-header text-center">iKariyer</h1>
                    <Button.Group vertical fluid className="w-100" size="big" color="teal">
                        <Button className="p-4" as={NavLink} to="/employer_dashboard/profile"><Icon name="user"/>Profil</Button>
                        <Button className="p-4"><Icon name="gg"/>Özgeçmiş</Button>
                        <Button className="p-4" as={NavLink} to="/jobseeker_dashboard/isilani">
                            <Icon name="list"/>
                            İş ilanları
                        </Button>
                        <Button className="p-4"><Icon name="bullhorn"/>Duyurular</Button>
                    </Button.Group>
                </div>
 */