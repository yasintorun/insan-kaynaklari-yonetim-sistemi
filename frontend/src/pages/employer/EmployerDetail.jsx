import React, { useEffect, useState } from 'react'
import MessageBox from '../../components/MessageBox'
import YTInfoMessage from '../../utilities/messages/YTInfoMessage'
import EmployerService from '../../services/employerService'
import { useParams } from 'react-router'
export default function EmployerDetail({employerId}) {
    
    const [employer, setEmployer] = useState({})
    //let { id } = useParams()
    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getById(employerId).then(result => setEmployer(result.data.data))
    }, [employer])
    return (
        <div>   
            
        </div>
    )
}
