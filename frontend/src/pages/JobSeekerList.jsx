import React, { useState, useEffect } from 'react'
import {Table } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'

export default function JobSeekerList() {
    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekeerService = new JobSeekerService()
        jobSeekeerService.getJobSeeker().then(result => setJobSeekers(result.data.data))
    })

    return (
        <div   className="mt-5">
        <h2 className="text-center">İş Arayanlar</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>İsim</Table.HeaderCell>
                    <Table.HeaderCell>Soyisim</Table.HeaderCell>
                    <Table.HeaderCell>Tc Kimlik Numarası</Table.HeaderCell>
                    <Table.HeaderCell>E-posta</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (
                            <Table.Row key={jobSeeker.userId}>
                                <Table.Cell>{jobSeeker.firstname}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastname}</Table.Cell>
                                <Table.Cell>{jobSeeker.tcNo}</Table.Cell>
                                <Table.Cell>{jobSeeker.eposta}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                
                </Table.Body>
            </Table>
        </div>
    )
}
