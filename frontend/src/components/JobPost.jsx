import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Label, Icon, Button } from 'semantic-ui-react'
import Helper from '../utilities/Helper'

export default function JobPost({ jobAdvert }) {
    return (
        <div>
            <Card className="w-75 m-auto mb-5 shadow position-relative"  as={NavLink} to={'/detail/' + jobAdvert.id}>
                <Card.Content>
                    <div className="header d-flex justify-content-between">
                        <Card.Header className="mt-1">{jobAdvert.jobPosition?.jobName}</Card.Header>
                        
                    </div>
                    <div >
                        <p className="mt-3">{jobAdvert.employer?.companyName}</p>
                        <Card.Meta className="mt-3"><Icon name="point" />{jobAdvert.city?.cityName}</Card.Meta>
                        <Card.Description className="mt-4 p-0"  >
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Label as='a' color='teal' size="small">
                                        {jobAdvert.workStyle?.name}
                                    </Label>
                                    <Label as='a' color='pink' size="small">
                                        {jobAdvert.workTimeStyle?.name}
                                    </Label>
                                </div>
                                <Card.Meta>
                                    {Helper.DateAgo(new Date(jobAdvert.releaseDate)) + " gün önce"}
                                </Card.Meta>
                            </div>
                        </Card.Description>
                    </div>
                </Card.Content>
                <div>
                    <Button size="big" icon="heart outline" className="z-index-1 topright"/>
                </div>
            </Card>
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