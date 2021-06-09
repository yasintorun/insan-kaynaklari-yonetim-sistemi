import React, { useState, useEffect } from 'react'
import {Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisement() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
    })
    return (
        <div   className="mt-5">
            <h2 className="text-center">İş ilanları</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Firma adı</Table.HeaderCell>
                    <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                    <Table.HeaderCell>Max kişi</Table.HeaderCell>
                    <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
                    <Table.HeaderCell>Son Tarih</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.userId}>
                                <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPositionName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.maxPerson}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                
                </Table.Body>
            </Table>
        </div>
    )
}
