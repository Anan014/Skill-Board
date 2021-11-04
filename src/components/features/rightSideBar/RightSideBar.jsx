import React from 'react';
import { Segment, Item, List, Button } from 'semantic-ui-react';

export default function RightSideBar({ user, skillsArray }) {
    return (
        <Segment.Group className='rightsidebar'>
            <Segment secondary>
                <Item.Group>
                    <Item.Image centered size='tiny' circular src='https://anamr.com/img/Anan_Amer.jpg' />
                    <Item>
                        <Item.Content>
                            <Item.Header content='anan_amer' />
                            <Item content={`Hello, Anan Amer`} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <Item.Group>
                    <Item.Content>
                        <List horizontal divided style={{ width: '100%' }}>
                            <Item style={{ width: '33%' }}>
                                <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }}>2125</List.Content>
                                <List.Content style={{ textAlign: 'center' }}>Helped</List.Content>
                            </Item>
                            <Item style={{ width: '33%' }}>
                                <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }} >511</List.Content>
                                <List.Content style={{ textAlign: 'center' }} >Posts</List.Content>
                            </Item>
                            <Item style={{ width: '33%' }}>
                                <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }} >1249</List.Content>
                                <List.Content style={{ textAlign: 'center' }} >Followers</List.Content>
                            </Item>
                        </List>
                    </Item.Content>
                </Item.Group>

                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Description>
                                Can help skills
                            </Item.Description>
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='Wordpress' icon='wordpress' labelPosition='left' />
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='HTML5' icon='html5' labelPosition='left' />
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='CSS3' icon='css3' labelPosition='left' />
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='SASS' icon='sass' labelPosition='left' />
                        </Item.Content>
                    </Item>
                </Item.Group>

                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Description>
                                Need help skills
                            </Item.Description>
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='Node JS' icon='node js' labelPosition='left' />
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='React JS' icon='react' labelPosition='left' />
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='Git' icon='git' labelPosition='left' />
                            <Button style={{ margin: '0.1rem 0', width: '100%' }} content='Github' icon='github' labelPosition='left' />
                        </Item.Content>
                    </Item>
                </Item.Group>

            </Segment>
        </Segment.Group>
    );
}