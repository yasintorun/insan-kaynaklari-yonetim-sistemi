import React, { useState, useEffect } from 'react'
import { Grid, Icon, Menu, Table } from 'semantic-ui-react'
import JobPost from '../layouts/JobPost'
import JobAdvertisementService from '../services/jobAdvertisementService'
import JobAdvertFiltering from '../layouts/JobAdvertFiltering'
export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [baseJobAdvert, setBaseJobAdvert] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
        jobAdvertisementService.getJobAdvertisement().then(result => setBaseJobAdvert(result.data.data))
       // setBaseJobAdvert(jobAdvertisements)
    }, [])

    const handleFilterClick = (filterOption) => {
        setJobAdvertisements(baseJobAdvert.filter(x=> filterOption.city == 0 || filterOption.city.indexOf(x.city.id) > -1)
        .filter(y=> filterOption.jobPosition[y.jobPosition.id] || filterOption.jobPosition.indexOf(true) < 0)
        .filter(z => filterOption.workStyle[z.workStyle.id] || filterOption.workStyle.indexOf(true) < 0)
        .filter(z => filterOption.workTimeStyle[z.workTimeStyle.id] || filterOption.workTimeStyle.indexOf(true) < 0)
        )
        
    }

    return (

        <div className="mt-5">
        <h2 className="text-center">İş ilanları</h2>
            <Grid>
                <Grid.Column width={4}>
                    <JobAdvertFiltering clickEvent={handleFilterClick}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <JobPost jobAdvert={jobAdvertisement} />
                        ))
                    }
                </Grid.Column>
            </Grid>
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