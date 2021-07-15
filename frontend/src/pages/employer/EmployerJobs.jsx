import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import IsApprovedIcon from '../../components/IsApprovedIcon'
import JobAdvertisementService from '../../services/jobAdvertisementService'

export default function EmployerJobs() {
    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertisementService()
        jobAdvertService.getByEmployerUserId(2).then(result=> setJobAdverts(result.data.data)).catch(r => console.log(r))

    }, [])

    return (
        <div>

            <div className="w-75 m-auto">
                <div className="mt-8">
                    <Table ssingleLine striped color="purple" textAlign="center" selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                                <Table.HeaderCell>Şehir</Table.HeaderCell>
                                <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
                                <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                                <Table.HeaderCell>Gelen Başvurular</Table.HeaderCell>
                                <Table.HeaderCell>Onaylı mı?</Table.HeaderCell>

                                <Table.HeaderCell>Detay</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                jobAdverts?.map(jobAdvert => (
                                    <Table.Row>
                                        <Table.Cell>{jobAdvert.jobPosition?.jobName}</Table.Cell>
                                        <Table.Cell>{jobAdvert.city?.cityName}</Table.Cell>
                                        <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
                                        <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                                        <Table.Cell>{Math.floor(Math.random() * 100)}</Table.Cell>
                                        <Table.Cell><IsApprovedIcon isActive={jobAdvert.active} /></Table.Cell>
                                        <Table.Cell>
                                            <Button positive as={NavLink} to={'/employer_dashboard/jobpost_detail/' + jobAdvert.id}>Detay</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>

        </div>
    )
}
