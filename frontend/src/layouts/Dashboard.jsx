import React from 'react'
import { Route } from 'react-router-dom'
import Employer from '../pages/EmployerList'
import JobAdvertisement from '../pages/JobAdvertisementList'
import JobPosition from '../pages/JobPositionList'
import JobPostDetail from '../pages/JobPostDetail'
import NewJobAdvert from '../pages/NewJobAdvert'
import Navbar from './Navbar'
import Home from '../pages/Home'
export default function Dashboard() {
    return (
        <div>
            
            <Navbar/>
            <div className="container">
                <Route exact path="/employer" component={Employer} />
                <Route exact path="/jobPosition" component={JobPosition} />
                <Route exact path="/newjobadvert" component={NewJobAdvert} />
                <Route exact path="/jobAdvertisements" component={JobAdvertisement} />
                <Route exact path="/detail/:id" component={JobPostDetail} />
            </div>

        </div>
    )
}
