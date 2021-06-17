import React from 'react'
import { Route } from 'react-router-dom'
import JobAdvertList from '../../pages/admin/JobAdvertList'

export default function AdminDashboard() {
    return (
        <div>
            <div className="container">
                <Route exact path="/admin/jobadvertlist" component={JobAdvertList} />
            </div>
        </div>
    )
}
