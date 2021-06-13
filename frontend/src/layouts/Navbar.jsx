import React, { useState } from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false)
//history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted size='massive'>
                <Container>
                <Menu.Item
                    name='home'
                    
                />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>
                    {isAuthenticated?<SignedIn signOut = {handleSignOut}/>:<SignedOut />}
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
