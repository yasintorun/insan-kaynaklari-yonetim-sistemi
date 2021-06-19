import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Label, Icon } from 'semantic-ui-react'
import Helper from '../Helper'

export default function JobPost({ jobAdvert }) {
    return (
        <div>
            <Card className="w-75 m-auto mb-5 shadow" as={NavLink} to={'/detail/' + jobAdvert.id}>
                <Card.Content>
                    <Card.Header>{jobAdvert.jobPosition?.jobName}</Card.Header>
                    <p  className="mt-2">{jobAdvert.employer?.companyName}</p>
                    <Card.Meta  className="mt-2"><Icon name="tint"/>{jobAdvert.city?.cityName}</Card.Meta>
                    <Card.Description  className="mt-3">
                        <div className="d-flex justify-content-between">
                            <div>
                                <Label as='a' color='teal'  size="small">
                                    {jobAdvert.workStyle?.name}
                                </Label>
                                <Label as='a' color='pink'  size="small">
                                    {jobAdvert.workTimeStyle?.name}
                                </Label>
                            </div>
                            <Card.Meta>
                                {Helper.DateAgo(new Date(jobAdvert.releaseDate)) + " gün önce"}
                            </Card.Meta>
                        </div>

                    </Card.Description>
                </Card.Content>
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