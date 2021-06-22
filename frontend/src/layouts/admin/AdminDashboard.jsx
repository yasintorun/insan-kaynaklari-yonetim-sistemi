import React, { useEffect, useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import JobAdvertList from '../../pages/admin/JobAdvertList'
import {  Button, Icon, Dropdown } from 'semantic-ui-react'
import './admin.css'
import ResumeList from '../../pages/ResumeList'
import Employer from '../../pages/EmployerList'
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


            <div className="col-md-2 side-bar ">
                <Button.Group vertical fluid>
                    {
                        sideBarOptions.map(options => (
                            <SideBarButton options={options} />
                        ))
                    }
                </Button.Group>
                <Button fluid negative icon="sign-out" content="Çıkış" as={NavLink} to="/" />
            </div>
            <div className="col-md-10 w-75 m-auto mt-0">
                <div className="" align="right">
                    <Button icon>
                        <Icon name="setting" />
                    </Button>
                    <Button icon >
                        <Icon name="bell" />
                    </Button>
                    <Dropdown icon="user" button>
                        <Dropdown.Menu>
                            <Dropdown.Item>Test</Dropdown.Item>
                            <Dropdown.Item>12</Dropdown.Item>
                            <Dropdown.Item >
                                <Icon name="sign-out"/>Çıkış Yap
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


                <Route exact path="/admin/jobadvertlist" component={JobAdvertList} />
                <Route exact path="/admin/userlist" component={Employer} />
                <Route exact path="/admin/resumelist" component={ResumeList} />
            </div>
        </div >
    )
}
