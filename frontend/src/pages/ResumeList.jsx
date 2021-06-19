import React, { useState, useEffect } from 'react'
import {Icon, Menu, Table } from 'semantic-ui-react'
import ResumeService from '../services/resumeService'

export default function ResumeList() {
    const [resumes, setResumes] = useState([])

    useEffect(() => {
        let resumeSerice = new ResumeService()
        resumeSerice.getResume().then(result => setResumes(result.data.data))
    })
    return (
        <div   className="mt-5">
        <h2 className="text-center">Özgeçmişler</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>İsim</Table.HeaderCell>
                    <Table.HeaderCell>Soyisim</Table.HeaderCell>
                    <Table.HeaderCell>Github</Table.HeaderCell>
                    <Table.HeaderCell>Linkedin</Table.HeaderCell>
                    <Table.HeaderCell>Açıklama</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        resumes.map(resume => (
                            <Table.Row key={resume.userId}>
                                <Table.Cell>{resume.firstName}</Table.Cell>
                                <Table.Cell>{resume.lastName}</Table.Cell>
                                <Table.Cell>{resume.githubLink}</Table.Cell>
                                <Table.Cell>{resume.linkedinLink}</Table.Cell>
                                <Table.Cell>{resume.summary}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                
                </Table.Body>
            </Table>
        </div>
    )
}
