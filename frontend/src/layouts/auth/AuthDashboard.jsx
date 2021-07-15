import React from 'react'
import { Route } from 'react-router'
import Links from '../../components/Links'
import SigninForm from '../../pages/auth/SigninForm'
import SignupForJobseeker from '../../pages/auth/SignupForJobseeker'
import SignupForEmployer from '../../pages/auth/SignupForEmployer'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import BaseSignUp from '../../pages/auth/BaseSignUp'
export default function Login() {
    return (
        <div>
            <Route exact path={Links.Login} component={SigninForm} />
            <Route exact path={Links.JobSeekerRegister}>
                <BaseSignUp Panel={SignupForJobseeker}/>
            </Route>
            <Route exact path={Links.EmployerRegister}>
                <BaseSignUp Panel={SignupForEmployer} />    
            </Route>
        </div>
    )
}
