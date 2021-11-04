import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Icon } from "semantic-ui-react";
import SignedInMenu from './SignInMenu';
import SignedOutMenu from './SignOutMenu';

export default function NavBar() {
    const [authenticated, setAuthenticated] = useState(true);
    const history = useHistory();

    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <Icon name='clipboard outline' />
                    SkillBoard
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/posts' header name='Posts' />
                {/* <Menu.Item as={NavLink} to='/postform' name='CreatePost' /> */}
                {authenticated ? (
                    <SignedInMenu signOut={handleSignOut} />
                ) : (
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                )}
            </Container>
        </Menu>
    );
}