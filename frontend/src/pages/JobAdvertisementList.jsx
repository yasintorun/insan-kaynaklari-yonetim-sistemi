import React, { useState, useEffect } from 'react'
import { Grid, Pagination } from 'semantic-ui-react'
import JobPost from '../layouts/JobPost'
import JobAdvertisementService from '../services/jobAdvertisementService'
import JobAdvertFiltering from '../layouts/JobAdvertFiltering'

export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [baseJobAdvert, setBaseJobAdvert] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [filterOption, setFilterOption] = useState({})
    const [pageSize, setPageSize] = useState(2)
    const [totalPageSize, setTotalPageSize] = useState(0)
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertFilterWithPage(activePage, pageSize, filterOption).then(result => {
            setJobAdvertisements(result.data.data)
            setTotalPageSize(result.data.data[0]?.totalJobAdvertSize)
        })

    }, [filterOption, activePage])


    const handleFilterClick = (filterOption) => {
        if (filterOption.cityId.length == 0)
            filterOption.cityId = null
        if (filterOption.jobPositionId.length == 0)
            filterOption.jobPositionId = null
        if (filterOption.workStyleId.length == 0)
            filterOption.workStyleId = null
        if (filterOption.workTimeStyleId.length == 0)
            filterOption.workTimeStyleId = null
        setFilterOption(filterOption)
    }



    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage)
    }
    console.log("asd")
    return (

        <div className="mt-8 mb-5">
            <h2 className="text-center">İş ilanları</h2>
            <Grid>
                <Grid.Column width={4}>
                    <JobAdvertFiltering clickEvent={handleFilterClick} />
                </Grid.Column>
                <Grid.Column width={12}>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <JobPost jobAdvert={jobAdvertisement} />
                        ))
                    }
                    <div className="w-75 m-auto">
                        <Pagination
                            firstItem={null}
                            lastItem={null}
                            activePage={activePage}
                            onPageChange={handlePaginationChange}
                            totalPages={totalPageSize / pageSize}
                        />
                    </div>
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