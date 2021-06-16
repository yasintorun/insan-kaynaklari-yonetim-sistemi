import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/jobAdvertisementService'
import { Button, Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function JobAdvertList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
        console.log(jobAdvertisements)
    })
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
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements.map(jobAdvert => (
                        <Table.Row>
                            <Table.Cell >{jobAdvert.jobPositionName}</Table.Cell>
                            <Table.Cell>{jobAdvert.employer ? jobAdvert.employer.companyName : null}</Table.Cell>
                            <Table.Cell>{jobAdvert.cityName}</Table.Cell>
                            <Table.Cell>{jobAdvert.workTimeStyle}</Table.Cell>
                            <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
                            <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                            
                            <Table.Cell><Button positive as = {NavLink} to="/jobad">Detay</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
