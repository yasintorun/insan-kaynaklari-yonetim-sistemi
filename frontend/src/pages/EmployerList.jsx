import React, { useState, useEffect } from 'react'
import {Icon, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function Employer() {
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setEmployers(result.data.data))
    })
    return (
        <div   className="mt-5">
            <h2 className="text-center">İş verenler</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                    <Table.HeaderCell>E-posta</Table.HeaderCell>
                    <Table.HeaderCell>Web-site</Table.HeaderCell>
                    <Table.HeaderCell>Telefon</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.userId}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.eposta}</Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>{employer.phone}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
