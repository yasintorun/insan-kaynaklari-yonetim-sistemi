import React, { useState, useEffect } from 'react'
import { Grid, Pagination, Dropdown, Label, Divider } from 'semantic-ui-react'
import JobPost from '../components/JobPost'
import JobAdvertisementService from '../services/jobAdvertisementService'
import JobAdvertFiltering from '../components/JobAdvertFiltering'

export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [baseJobAdvert, setBaseJobAdvert] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [filterOption, setFilterOption] = useState({})
    const [pageSize, setPageSize] = useState(1)
    const [totalPageSize, setTotalPageSize] = useState(0)
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertFilterAndPage(activePage, pageSize, filterOption).then(result => {
            setJobAdvertisements(result.data.data)
            if (totalPageSize == 0 && !!result.data.data[0])
                setTotalPageSize(result.data.data[0]?.totalJobAdvertSize)
        })

    }, [filterOption, activePage, pageSize])


    const handleFilterClick = (filterOption) => {
        if (filterOption.cityId.length == 0)
            filterOption.cityId = null
        if (filterOption.jobPositionId.length == 0)
            filterOption.jobPositionId = null
        if (filterOption.workStyleId.length == 0)
            filterOption.workStyleId = null
        if (filterOption.workTimeStyleId.length == 0)
            filterOption.workTimeStyleId = null
        setTotalPageSize(0)
        setActivePage(1)
        setFilterOption(filterOption)
    }



    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage)
    }

    const pageSizeOptions = [1, 2, 5, 10]

    const handlePageSizeOnChange = (e, { value }) => {
        setPageSize(pageSizeOptions[value])
        setActivePage(1)
    }

    return (

        <div className="mt-8 mb-5 container-large">
            <div className="row">
                <div className="col-md-4">
                    <h2>Filtreleme</h2>
                    <JobAdvertFiltering clickEvent={handleFilterClick} />
                </div>
                <div className="col-md-8">

                    <h2 className="text-center">İş ilanları</h2>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <JobPost jobAdvert={jobAdvertisement} />
                        ))
                    }
                    <div className="w-75 m-auto" align="center">
                        <Pagination
                            firstItem={null}
                            lastItem={null}
                            activePage={activePage}
                            onPageChange={handlePaginationChange}
                            totalPages={Math.ceil(totalPageSize / pageSize)}
                        />
                        <Divider />
                        <div>
                            <Label>Sayfada görülecek toplam iş ilan sayısı</Label><br />
                            <Dropdown
                                selection
                                defaultValue={0}
                                options={pageSizeOptions.map((x, index) => {
                                    return { text: x, key: index, value: index }
                                })}
                                onChange={handlePageSizeOnChange}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}