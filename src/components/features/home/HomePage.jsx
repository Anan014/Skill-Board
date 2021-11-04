import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Header, Icon, Button, Grid, Item, Input, Divider } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Grid>
                    <Grid.Column width={8}>
                        <Header as='h1' inverted>
                            <Icon size='massive' name='clipboard' style={{ marginBottom: 12 }} />
                            Skill Board
                        </Header>
                        <Item>
                            <Item.Header style={{ fontSize: '2rem', lineHeight: '3rem', width: '75%', margin: 'auto' }}>
                                Help friends and the world around you on SkillBoard.
                            </Item.Header>
                        </Item>

                    </Grid.Column>

                    <Grid.Column width={6}>

                        <Segment.Group>
                            <Segment >

                                <Item.Group>
                                    <Item>
                                        <Input
                                            size='large'
                                            icon='user'
                                            placeholder='Username or Phone Number'
                                            style={{ width: '100%' }}
                                        />
                                    </Item>

                                    <Item>
                                        <Input
                                            size='large'
                                            icon='ellipsis horizontal'
                                            placeholder='Password'
                                            style={{ width: '100%' }}
                                        />
                                    </Item>
                                    <Button
                                        size='large'
                                        as={Link}
                                        exact to='/posts'
                                        content='Login'
                                        style={{ width: '100%' }} />

                                </Item.Group>

                                <Divider horizontal  >Or</Divider>
                                <Item.Group>
                                    <Item>
                                    <Button
                                        size='large'
                                        content='Signup'
                                        style={{ width: '100%' }} />
                                    </Item>
                                </Item.Group>

                            </Segment>

                        </Segment.Group>


                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>
    );
}