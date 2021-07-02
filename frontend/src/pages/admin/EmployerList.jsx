

/**
 * 
 * TOdo
 * EmployerDisplayDto kısmını tablolara göre düzenle.
 * TAbloları düzenle
 * 
 * 
 */


import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Table, Label, Button } from 'semantic-ui-react'
import IsApprovedIcon from '../../components/IsApprovedIcon'
import EmployerService from '../../services/employerService'
import UpdateEmployerInfoService from '../../services/UpdateEmployerInfoService'

export default function Employer() {
    const [employers, setEmployers] = useState([])
    const [updateEmployers, setUpdateEmployers] = useState([])
    useEffect(() => {
        let updateEmployerService = new UpdateEmployerInfoService()
        updateEmployerService.get().then(result => setUpdateEmployers(result.data.data))
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => { 
            console.log(updateEmployers)
            setEmployers(result.data.data) 

        })

    }, [])

    const isUpToDate = (userId) => {
        return(!! (!updateEmployers.find(x => x.employer?.userId == userId)))
    }

    return (
        <div className="mt-5">

            {console.log("asd")}
            <h2 className="text-center">İş verenler</h2>
            <Table celled selectable textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>E-posta</Table.HeaderCell>
                        <Table.HeaderCell>Web-site</Table.HeaderCell>
                        <Table.HeaderCell>Telefon</Table.HeaderCell>
                        <Table.HeaderCell>Onaylı mı?</Table.HeaderCell>
                        <Table.HeaderCell>Güncel mi?</Table.HeaderCell>
                        <Table.HeaderCell>Detay sayfası</Table.HeaderCell>
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
                                <Table.Cell><IsApprovedIcon isActive={employer.confirmed} /></Table.Cell>
                                <Table.Cell><IsApprovedIcon isActive={isUpToDate(employer.userId)} /></Table.Cell>
                                <Table.Cell>
                                    <Button positive as={NavLink} to={'/admin/userlist/employerDetail/' + employer.userId}>Detay</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
