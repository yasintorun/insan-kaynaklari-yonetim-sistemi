import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

export default function JobAdvertCardInfo({ jobAdvertisement, isSmall }) {

    const size = isSmall ? 70 : 100

    return (
        <div className=" d-flex flex-sm-row" >
            <div className="logo">
                <img width={size} height={size} src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/y12.jpg" className="rounded" alt="" />
            </div>
            <div className="job-detail-info ms-4">
                <div>
                    <h2 className="bolder">{jobAdvertisement.jobPosition?.jobName}</h2>
                    <div className="d-flex ">
                        <div className="">
                            <Icon name="location arrow" color="grey" />
                            {jobAdvertisement.city?.cityName}
                        </div>
                        <div className="ms-4">
                            <Icon name="clock outline" color="grey" />
                            {jobAdvertisement.releaseDate}
                        </div>
                        <div className="ms-4">
                            <Icon name="money bill alternate outline" color="grey" />
                            {jobAdvertisement.minSalary} - {jobAdvertisement.maxSalary}<Icon name="lira" color="grey" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <Label color="teal">{jobAdvertisement.workStyle?.name}</Label>
                        <Label color="orange" >{jobAdvertisement.workTimeStyle?.name}</Label>
                    </div>
                </div>

            </div>
        </div>
    )
}

