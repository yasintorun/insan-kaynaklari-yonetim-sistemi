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
        <div className="fixed-top">
            <Menu  size='massive'>
                <div className="container-large d-flex">
                <Menu.Item
                    name='home'
                    as={NavLink}
                    to = "/"
                    
                />
                <Menu.Item
                    name='iş ilanları'
                    as={NavLink}
                    to="/jobAdvertisements"
                />
                <Menu.Item
                    name='Yeni iş ilanı'
                    as={NavLink}
                    to="/newjobadvert"
                />
                <Menu.Item
                    name='İş ilanlarını Görüntüle'
                    as={NavLink}
                    to="/admin/jobadvertlist"
                />
                <Menu.Item
                    name='Özgeçmişler'
                    as={NavLink}
                    to="/admin/resumeList"
                />


                <Menu.Menu position='right'>
                    {isAuthenticated?<SignedIn signOut = {handleSignOut}/>:<SignedOut />}
                </Menu.Menu>
                </div>
            </Menu>
        </div>
    )
}
