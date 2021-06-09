import React, { useState, useEffect } from 'react'
import {Icon, Menu, Table } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPosition() {
    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let setJobPositionService = new JobPositionService()
        setJobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
    })
    return (
        <div   className="mt-5">
            <h2 className="text-center">İş Pozisyonları</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>id</Table.HeaderCell>
                    <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPositions.map(jobPosition => (
                            <Table.Row key={jobPosition.id}>
                                <Table.Cell>{jobPosition.id}</Table.Cell>
                                <Table.Cell>{jobPosition.jobName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
