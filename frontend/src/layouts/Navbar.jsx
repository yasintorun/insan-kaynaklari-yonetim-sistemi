import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
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

        
        <div className="fixed-top">
            <Menu  size='massive'>
                <div className="container-large d-flex">
                <Menu.Item as={NavLink} to = "/" className="logo" >iKariyer</Menu.Item>
                <Menu.Item
                icon="search"
                    name='iş ilanları'
                    as={NavLink}
                    to="/jobAdvertisements"
                />


                <Menu.Menu position='right'>
                    {isAuthenticated?<SignedIn signOut = {handleSignOut}/>:<SignedOut />}
                </Menu.Menu>
                </div>
            </Menu>
        </div>
        
      <div className="mt-8"></div>
        </div>
    )
}
