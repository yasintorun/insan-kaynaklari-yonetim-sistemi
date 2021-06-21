import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Icon, Dropdown } from 'semantic-ui-react'

export default function SignedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button positive as={NavLink} to="/login" onClick={signIn}>
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
                >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='attention' text='iş arayan' />
                        <Dropdown.Divider />
                        <Dropdown.Item icon='comment' text='İş veren' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
