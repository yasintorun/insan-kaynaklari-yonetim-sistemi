import React, { useState, useEffect } from 'react'
import {Table } from 'semantic-ui-react'
import UserLanguageService from '../../services/userLanguageService'

export default function UserLanguage() {
    const [userLanguages, setUserLangugages] = useState([])

    useEffect(() => {
        let userLanguageService = new UserLanguageService()
        userLanguageService.getLanguage().then(result => setUserLangugages(result.data.data))
    })
    return (
        <div   className="mt-5">
            <h2 className="text-center">Diller</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Kullanıcı id</Table.HeaderCell>
                    <Table.HeaderCell>Dil Adı</Table.HeaderCell>
                    <Table.HeaderCell>Seviye</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        userLanguages.map(userLanguage => (
                            <Table.Row key={userLanguage.id} >   
                                <Table.Cell>{userLanguage.jobseeker.userId}</Table.Cell>
                                <Table.Cell>{userLanguage.languageName}</Table.Cell>
                                <Table.Cell>{userLanguage.level}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
