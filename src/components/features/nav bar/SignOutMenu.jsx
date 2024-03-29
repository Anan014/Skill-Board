import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

export default function SignOutMenu({ setAuthenticated }) {
    return (

        <Menu.Item position='right'>
            <Button onClick={() => setAuthenticated(true)} basic inverted content='Login' />
            <Button basic inverted content='Register' style={{ marginLeft: '0.5rem' }} />
        </Menu.Item>

    );
}