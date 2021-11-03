import React from 'react';
import { Container, Segment,Header,Icon } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
            <Header as='h1' inverted>
                    <Icon size='massive' name='clipboard' style={{ marginBottom: 12 }} />
                    Skill Board
                </Header>
            </Container>
        </Segment>
    );
}