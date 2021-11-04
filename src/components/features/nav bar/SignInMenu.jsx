import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

export default function SignInMenu({signOut}) {
    return (
        <>
            <Menu.Item position='right'>
                <Image avatar spaced='right' src='https://anamr.com/img/Anan_Amer.jpg' />
                <Dropdown pointing='top right' text='Anan Amer'>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/createPost' text='Create Post' icon='plus' />
                        <Dropdown.Item text='My profile' icon='user' />
                        <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </>
    );
}