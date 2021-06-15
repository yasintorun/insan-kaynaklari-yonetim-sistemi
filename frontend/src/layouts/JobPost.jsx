import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Label } from 'semantic-ui-react'
import Helper from '../Helper'

export default function JobPost( {jobAdvert}) {
    return (
        <div>
            <Card className="w-50 m-auto mb-5 shadow" as={NavLink} to={'/detaily/' + jobAdvert.id}>
                <Card.Content>
                    <Card.Header>{jobAdvert.jobPositionName}</Card.Header>
                    <p>{jobAdvert.companyName}</p>
                    <Card.Meta>{jobAdvert.cityName}</Card.Meta>
                    <Card.Description>
                        <div className="d-flex justify-content-between">
                            <div>
                                <Label as='a' color='teal' tag size="small">
                                    {jobAdvert.workStyle}
                                </Label>
                                <Label as='a' color='pink' tag size="small">
                                    {jobAdvert.workTimeStyle}
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