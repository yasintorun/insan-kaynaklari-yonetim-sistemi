import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import UserSkillService from '../../services/userSkillService'

export default function UserSkill() {
    const [userSkills, setUserSkills] = useState([])

    useEffect(() => {
        let userSkillService = new UserSkillService()
        userSkillService.getSkill().then(result => setUserSkills(result.data.data))
    })
    return (
        <div   className="mt-5">
            <h2 className="text-center">Yetenekler</h2>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Kullanıcı id</Table.HeaderCell>
                    <Table.HeaderCell>Yetenek Adı</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        userSkills.map(userSkill => (
                            <Table.Row key={userSkill.id}>   
                                <Table.Cell>{userSkill.userId}</Table.Cell>
                                <Table.Cell>{userSkill.skillName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
