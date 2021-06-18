import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Button, Label, Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function JobAdvertList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
        console.log(jobAdvertisements)
    }, [])
    return (
        <div>
            <Table singleLine striped color="purple" textAlign="center" selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>İşveren</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
                        <Table.HeaderCell>Başvuru başlangıç tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Başvuru bitiş tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Onaylı mı?</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements.map(jobAdvert => (
                        <Table.Row>
                            <Table.Cell >{jobAdvert.jobPositionName}</Table.Cell>
                            <Table.Cell>{jobAdvert.employer?.companyName}</Table.Cell>
                            <Table.Cell>{jobAdvert.cityName}</Table.Cell>
                            <Table.Cell>{jobAdvert.workTimeStyle?.name}</Table.Cell>
                            <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
                            <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                            <Table.Cell>
                                {
                                    jobAdvert.active
                                        ?<Label color="green"> &#10004; </Label>
                                        :<Label color="red">&#10008;</Label>
                                }
                            </Table.Cell>
                            
                            <Table.Cell><Button positive as = {NavLink} to={'/detail/' + jobAdvert.id}>Detay</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
