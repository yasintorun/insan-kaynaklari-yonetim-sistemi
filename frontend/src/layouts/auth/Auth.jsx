import React from 'react'
import { Route } from 'react-router'
import Links from '../../components/Links'
import SigninForm from '../../pages/auth/SigninForm'
import SignupForJobseeker from '../../pages/auth/SignupForJobseeker'
import SignupForEmployer from '../../pages/auth/SignupForEmployer'
import Footer from '../Footer'
import Navbar from '../Navbar'
export default function Login() {
    return (
        <div>
            <Navbar />
            <Route exact path={Links.Login} component={SigninForm} />
            <Route exact path={Links.JobSeekerRegister} component={SignupForJobseeker} />
            <Route exact path={Links.EmployerRegister} component={SignupForEmployer} />
            <Footer />
        </div>
    )
}
