import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
               <Button as={NavLink} to="/login" onClick={signIn} primary>Giriş yap</Button>
               <Button as={NavLink} to="/register"  primary style={{marginLeft:'0.5em'}}>Kayıt Ol</Button> 
            </Menu.Item>
        </div>
    )
}
