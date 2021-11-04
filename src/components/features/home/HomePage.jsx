import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Header, Icon, Button } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Icon size='massive' name='clipboard' style={{ marginBottom: 12 }} />
                    Skill Board
                </Header>
                <Button as={Link} exact to='/posts' content='Login' />
            </Container>
        </Segment>
    );
}