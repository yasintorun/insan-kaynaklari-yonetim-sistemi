import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Label, Segment, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobPostDetail() {
    let { id } = useParams()
    const [jobAdvertisement, setjobAdvertisement] = useState({})
    const [isAdmin, setIsAdmin] = useState(true)

    let jobAdvertService = new JobAdvertisementService()
    function handleAdmin(params) {
        setIsAdmin(true)
    }

    function handleOther(params) {
        setIsAdmin(false)
    }

    const handleOnSubmit = (jobAdvertisement) => {
        toast.success(`${jobAdvertisement.id} onaylandı`, {onClose: () => {/*Burada sayfa geri gelcek.*/}})
        jobAdvertService.changeActive(!jobAdvertisement.active, jobAdvertisement.id).then() 
        
    }

    useEffect(() => {
        
        jobAdvertService.getJobAdvertisementById(id).then(result => setjobAdvertisement(result.data.data))
    }, [])

    return (
        <div className="page-center">
            <div className="shadow-no-hover bordered shadow w-75 m-auto">
                <div className="row">
                    <div className="col-md-8">
                        <h2>{jobAdvertisement.jobPosition?.jobName}</h2>
                        <Label as='a' color='purple' >
                            {jobAdvertisement.workStyle?.name}
                        </Label>
                        <Label as='a' color='red'>
                            {jobAdvertisement.workTimeStyle?.name}
                        </Label>
                    </div>
                    <div className="card col-md-4">
                        <div className="card-body">

                            <h2 className="card-title color-theme">{jobAdvertisement.employer?.companyName}</h2>
                            <h6 className="card-subtitle mb-2 text-muted"><a href="">{jobAdvertisement.employer?.website}</a></h6>
                            <h6 className="card-subtitle mb-2 text-muted">{jobAdvertisement.employer?.eposta}</h6>
                            <p className="card-text">{jobAdvertisement.employer?.summary}</p>

                            <Label color='teal' tag>
                                {jobAdvertisement.city?.cityName}
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
                            <div dangerouslySetInnerHTML={{ __html: jobAdvertisement.description }} />
                        </Segment>
                    </div>
                </div>
                <div className="text-center mt-4">
                    {
                        isAdmin
                            ? <div>
                                <Button color='green' 
                                onClick={() => handleOnSubmit(jobAdvertisement)}>
                                    {
                                        jobAdvertisement.active ?  "De-Aktif et" : "Onayla"
                                    }
                                    
                                </Button>
                                <Button color='red'>Sil</Button>
                            </div>
                            : <Button color='green'>Başvur</Button>

                    }

                </div>
            </div>
        </div>
    )
}
