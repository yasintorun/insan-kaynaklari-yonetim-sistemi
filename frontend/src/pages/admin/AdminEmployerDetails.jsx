import React from 'react'
import { useParams } from 'react-router-dom'
import EmployerDetail from '../EmployerDetail'

export default function AdminEmployerDetails() {
    let {id} = useParams()
    return (
        <div>
            <div>
                <EmployerDetail employerId = {id}/>
            </div>
        </div>
    )
}
