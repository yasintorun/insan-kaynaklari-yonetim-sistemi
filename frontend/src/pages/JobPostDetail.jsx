import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Image, Table, Label, Segment, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import WorkStyleService from '../services/workStyleService'
export default function JobPostDetail() {
    let { id } = useParams()
    const [jobAdvertisement, setjobAdvertisement] = useState({})
    //const [workStyles, setWorkStyles] = useState([])
    useEffect(() => {
        let jobAdvertService = new JobAdvertisementService()
        jobAdvertService.getJobAdvertisementById(id).then(result => setjobAdvertisement(result.data.data))
        console.log("tsst")
    }, [])

    return (
        <div className="page-center">
            <div className="bordered shadow w-75 m-auto">
                <div className="row">
                    <div className="col-md-8">
                        <h2>{jobAdvertisement.jobPositionName}</h2>
                        <Label as='a' color='purple' >
                            {jobAdvertisement.workStyle}
                        </Label>
                        <Label as='a' color='red'>
                            {jobAdvertisement.workTimeStyle}
                        </Label>
                    </div>
                    <div className="card col-md-4">
                        <div className="card-body">
                            
                            <h2 className="card-title color-theme">{jobAdvertisement.employer ? jobAdvertisement.employer.companyName : null}</h2>
                            <h6 className="card-subtitle mb-2 text-muted"><a href="">{jobAdvertisement.employer ? jobAdvertisement.employer.website: null}</a></h6>
                            <h6 className="card-subtitle mb-2 text-muted">{jobAdvertisement.employer ? jobAdvertisement.employer.eposta: null}</h6>
                            <p className="card-text">{jobAdvertisement.employer ? jobAdvertisement.employer.summary : null}</p>
                            
                            <Label color='teal' tag>
                                {jobAdvertisement.cityName}
                            </Label>
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="">
                        <Segment.Group horizontal >
                            <Segment padded color="teal">
                                <Label attached='top'>Kontenjan</Label>
                                <p>{jobAdvertisement.maxPerson}</p>
                            </Segment>
                            <Segment padded color="teal">
                                <Label attached='top'>Minimum maaş</Label>
                                <p>{jobAdvertisement.minSalary}</p>
                            </Segment>
                            <Segment padded color="teal">
                                <Label attached='top'>maksimum maaş</Label>
                                <p>{jobAdvertisement.maxSalary}</p>
                            </Segment>
                        </Segment.Group>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <Segment horizontal color="teal">

                            <Label attached='top'>İş Tanımı</Label>
                            <div dangerouslySetInnerHTML={{ __html: jobAdvertisement.description}} />
                        </Segment>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Button color='green'>Başvur</Button>
                </div>
            </div>
    </div>
    )
}
