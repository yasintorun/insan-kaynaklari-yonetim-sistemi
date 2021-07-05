import React from 'react'
import { Route } from 'react-router-dom'
import EmployerDetail from '../pages/employer/EmployerDetail'
import Employer from '../pages/admin/EmployerList'
import JobAdvertisement from '../pages/JobAdvertisementList'
import JobPosition from '../pages/JobPositionList'
import JobPostDetail from '../pages/JobPostDetail'
import NewJobAdvert from '../pages/employer/NewJobAdvert'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Dashboard() {
    return (
        <div className="bg-ligh">
            <Navbar />
            <div className="container">
                <Route exact path="/employer" component={Employer} />
                <Route exact path="/jobPosition" component={JobPosition} />
                <Route exact path="/newjobadvert" component={NewJobAdvert} />
                <Route exact path="/employer/detail/:id" component={EmployerDetail} />
            </div>
                <Route exact path="/detail/:id" component={JobPostDetail} />
                <Route exact path="/jobAdvertisements" component={JobAdvertisement} />
            <Footer/>
        </div>
    )
}
