import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import Employer from '../pages/EmployerList'
import JobAdvertisement from '../pages/JobAdvertisementList'
import JobPosition from '../pages/JobPositionList'
import JobPostDetail from '../pages/JobPostDetail'
import jobPostDetail from '../pages/JobPostDetail'
import NewJobAdvert from '../pages/NewJobAdvert'

export default function Dashboard() {
    return (
        <div>
            
            <Container>
                <Route exact path="/employer" component={Employer}/>
                <Route exact path="/jobPosition" component={JobPosition}/>
                <Route exact path="/newjobadvert" component = {NewJobAdvert} />
                <Route exact path="/jobAdvertisements" component = {JobAdvertisement} />
                <Route exact path="/detail/:id" component = {JobPostDetail}/>
            </Container>

        </div>
    )
}
