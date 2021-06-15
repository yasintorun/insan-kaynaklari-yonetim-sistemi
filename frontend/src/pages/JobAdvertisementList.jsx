import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobPost from '../layouts/JobPost'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
    })
    return (
        
        <div className="mt-5">
            
            <h2 className="text-center">İş ilanları</h2>
            {
                //Todo: Filtrleme elemanlarını buraya yazacaksın.
                jobAdvertisements.map(jobAdvertisement => (
                    <JobPost jobAdvert={jobAdvertisement} />
                ))
            }
        </div>
    )
}


/*
<Table.Row key={jobAdvertisement.userId}>
    <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
    <Table.Cell>{jobAdvertisement.jobPositionName}</Table.Cell>
    <Table.Cell>{jobAdvertisement.maxPerson}</Table.Cell>
    <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
    <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
</Table.Row>

*/