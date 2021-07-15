import React, { useEffect, useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import JobAdvertList from '../../pages/admin/JobAdvertList'
import { Button, Icon, Dropdown } from 'semantic-ui-react'
import './admin.css'
import ResumeList from '../../pages/admin/ResumeList'
import Employer from '../../pages/admin/EmployerList'
import AdminProfile from '../../pages/admin/AdminProfile'
import AdminEmployerDetails from '../../pages/admin/AdminEmployerDetails'
import SideBar from '../../components/SideBar'
export default function AdminDashboard() {

    const [activePage, setActivePage] = useState({})

    useEffect(() => {
        setActivePage({ page: 'jobAdvertList' })
    }, [])

    const handlePageClick = (pageName) => {
        setActivePage(pageName)
    }



    const SideBarButton = ({ options }) => {
        return (
            <Button
                fluid
                size="huge"
                color="teal"
                className="rounded-0  d-flex justify-content-between align-items-center"
                as={NavLink} to={options.url}
            >
                <div>
                    <Icon name={options.iconName} />
                    <span className="m-3">{options.buttonName}</span>
                </div>
                <Icon name="right chevron" />
            </Button>
        )
    }

    const sideBarOptions = [
        {
            buttonName: "İş ilanları",
            iconName: "list layout",
            url: "/admin/jobadvertlist"
        },
        {
            buttonName: "Kullanıcılar",
            iconName: "users",
            url: "/admin/userList"
        },
        {
            buttonName: "Özgeçmişler",
            iconName: "gg",
            url: "/admin/resumeList"
        }
    ]

    const userOptions = [
        {
            text: 'test',
            key: 'Jenny Hess',
        },
    ]
    return (

        <div className="row">
            <SideBar>
                <Button className="p-4 theme-bg" as={NavLink} to="/admin/profile">
                    <Icon name="user" />
                    Profile
                </Button>
                <Button className="p-4 theme-bg" as={NavLink} to="/admin/jobadvertlist">
                    <Icon name="list" />
                    İş ilanları
                </Button>
                <Button className="p-4 theme-bg" as={NavLink} to="/admin/userlist">
                    <Icon name="heart" />
                    Kullanıcılar
                </Button>
                <Button className="p-4 theme-bg" as={NavLink} to="/admin/duyurular">
                    <Icon name="bullhorn" />
                    Duyurular
                </Button>
            </SideBar>
            <div className="col-md-10 container-content mt-0">
                <Route exact path="/admin/jobadvertlist" component={JobAdvertList} />
                <Route exact path="/admin/userlist" component={Employer} />
                <Route exact path="/admin/resumelist" component={ResumeList} />
                <Route exact path="/admin/profile" component={AdminProfile} />
                <Route exact path="/admin/userlist/employerDetail/:id" component={AdminEmployerDetails} />
            </div>
        </div >
    )
}
