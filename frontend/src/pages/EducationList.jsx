import React, { useState, useEffect } from 'react'
import {Table } from 'semantic-ui-react'
import EducationService from '../services/educationService'

export default function Education() {
    const [educations, setEducations] = useState([])

    useEffect(() => {
        let educationService = new EducationService()
        educationService.getEducation().then(result => setEducations(result.data.data))
    })
    return (
        <div   className="mt-5">
            <h2 className="text-center">Eğitimler</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                    <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
                    <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
                    <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        educations.map(education => (
                            <Table.Row key={education.id}>
                                <Table.Cell>{education.schoolName}</Table.Cell>
                                <Table.Cell>{education.departmentName}</Table.Cell>
                                <Table.Cell>{education.startingDate}</Table.Cell>
                                <Table.Cell>{education.graduationDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                
                </Table.Body>
            </Table>
        </div>
    )
}
