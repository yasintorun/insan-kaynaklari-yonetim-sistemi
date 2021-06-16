import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import JobAdvertList from '../../pages/admin/JobAdvertList'

export default function AdminDashboard() {
    return (
        <div>
            <Container>
                <Route exact path="/admin/jobadvertlist" component={JobAdvertList} />
            </Container>
        </div>
    )
}
