import React from 'react'
import Navbar from '../Navbar'
import { Route } from 'react-router'
import SigninForm from '../../pages/auth/SigninForm'
import Education from '../../pages/EducationList'
import SignupForJobseeker from '../../pages/auth/SignupForJobseeker'
export default function Login() {
    return (
        <div>
            <Route exact path="/login" component={SigninForm}/>
            <Route exact path="/register" component={SignupForJobseeker}/>
        </div>
    )
}
