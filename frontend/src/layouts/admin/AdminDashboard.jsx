import React, { useEffect, useState } from 'react'
import { NavLink, Redirect, Route, useHistory } from 'react-router-dom'
import JobAdvertList from '../../pages/admin/JobAdvertList'
import { Button, Icon, Dropdown } from 'semantic-ui-react'
import './admin.css'
import ResumeList from '../../pages/admin/ResumeList'
import Employer from '../../pages/admin/EmployerList'
import AdminProfile from '../../pages/admin/AdminProfile'
import AdminEmployerDetails from '../../pages/admin/AdminEmployerDetails'
import SideBar from '../../components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout, USER_LOGOUT } from '../../Store/actions/userActions'
export default function AdminDashboard() {

    const dispatch = useDispatch()

    const history = useHistory()


    useEffect(() => {
        
    })

    const adminLogout = () => {
        dispatch(userLogout(USER_LOGOUT)).then(() => {
            history.push('/')
        })
    }
    
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
                <Button className="p-4 theme-bg text-danger" onClick={() => adminLogout()}>
                    <Icon name="sign-out" />
                    Çıkış Yap
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
