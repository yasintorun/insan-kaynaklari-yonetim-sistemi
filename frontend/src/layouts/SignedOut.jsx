import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Icon, Dropdown } from 'semantic-ui-react'
import Links from '../components/Links'
export default function SignedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button positive as={NavLink} to={Links.Login} onClick={signIn}>
                    <Icon name="sign-in" />
                    Giriş Yap
                </Button>
                <Dropdown
                    text='Kayıt ol'
                    icon='user'
                    floating
                    labeled
                    button
                    className='icon'
                    style={{marginLeft: '10px'}}
                >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='user' text='iş arayan' as={NavLink} to={Links.JobSeekerRegister}/>
                        <Dropdown.Divider />
                        <Dropdown.Item icon='address book outline' text='İş veren'  as={NavLink} to={Links.EmployerRegister}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
