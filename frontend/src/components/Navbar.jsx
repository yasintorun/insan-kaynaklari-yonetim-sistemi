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
                <Menu size='massive'>
                    <div className="container-large d-flex">
                        <Menu.Item as={NavLink} to="/" className="logo" >iKariyer</Menu.Item>

                          <Menu.Menu position='right'>
                            {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut />}
                        </Menu.Menu>
                    </div>
                </Menu>


            </div>

            <div className="mt-8"></div>
            <Menu size='massive'>
                <div className="d-flex">
                    <Menu.Item >Bu blok silinecektir.</Menu.Item>
                    <Menu.Item
                        icon="search"
                        name='Admin panel'
                        as={NavLink}
                        to="/admin"
                    />  
                    <Menu.Item
                        icon="gg"
                        name='İşveren Panel'
                        as={NavLink}
                        to="/employer_dashboard"
                    />
                    <Menu.Item
                        icon="gg"
                        name='İş arayan panel'
                        as={NavLink}
                        to="/jobseeker_dashboard"
                    />
                </div>
            </Menu>
        </div>
    )
}
