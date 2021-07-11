import React from 'react'

import { Button, Icon, Accordion, Menu, Segment } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdvertisement from '../../pages/JobAdvertisementList'
import { NavLink } from 'react-router-dom'
import ResumeDetail from '../../pages/jobseeker/ResumeDetail'
import JobPostDetail from '../../pages/JobPostDetail'
import SideBar from '../../components/SideBar'
import { useState } from 'react'
import JobseekerProfile from '../../pages/jobseeker/JobseekerProfile'
export default function JobseekerDashboard() {

    const [profileActiveIndex, setProfileActiveIndex] = useState(0)

    function handleProfileClick(e, titleProps) {
        const { index } = titleProps

        const newIndex = profileActiveIndex === index ? -1 : index

        setProfileActiveIndex(newIndex)
    }

    return (
        <div style={{ backgroundColor: '#e6e6e6' }}>
            <div className="row">
                <SideBar>

                    <Button className="p-4 theme-bg" as={NavLink} to="/jobseeker_dashboard/profile">
                        <Icon name="user"/>
                        Profile
                    </Button>

                    <Button className="p-4 theme-bg" as={NavLink} to="/jobseeker_dashboard/resume">
                        <Icon name="gg" />
                        Özgeçmişim
                    </Button>
                    <Button className="p-4 theme-bg" as={NavLink} to="/jobseeker_dashboard/isilanlari">
                        <Icon name="list" />
                        İş ilanları
                    </Button>
                    <Button className="p-4 theme-bg" as={NavLink} to="/jobseeker_dashboard/fovarite-job-advert">
                        <Icon name="heart" />
                        Favori iş ilanlarım
                    </Button>
                    <Button className="p-4 theme-bg" as={NavLink} to="/jobseeker_dashboard/employer-list">
                        <Icon name="address book" />
                        Firmalar
                    </Button>
                    <Button className="p-4 theme-bg">
                        <Icon name="bullhorn" />
                        Duyurular
                    </Button>
                </SideBar>

                <div className="col-md-10 container-content">
                    <Route path="/jobseeker_dashboard/profile" component={JobseekerProfile} />
                    <Route path="/jobseeker_dashboard/isilanlari" component={JobAdvertisement} />
                    <Route path="/jobseeker_dashboard/resume" component={ResumeDetail} />
                    <Route path="/jobseeker_dashboard/jobpost_detail/:id" component={JobPostDetail} />
                </div>
            </div>
        </div>
    )
}
