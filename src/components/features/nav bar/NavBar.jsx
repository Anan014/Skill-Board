import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";
import SignedInMenu from './SignInMenu';
import SignedOutMenu from './SignOutMenu';

export default function NavBar() {
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut() {
        setAuthenticated(false);
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    SkillBoard
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/posts' header name='Posts' />
                <Menu.Item as={NavLink} to='/postform' name='CreatePost' />
                {authenticated ? (
                    <SignedInMenu signOut={handleSignOut} />
                ) : (
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                )}
            </Container>
        </Menu>
    );
}