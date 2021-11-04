import React from 'react';
import {Segment, Item, List, Divider } from 'semantic-ui-react';

export default function LeftSideBar({ users, skillsArray }) {
    return (
        <>
            <Segment.Group >
                <Segment secondary>

                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header content='appleseeds' />
                                <Item.Description content='AppleSeeds FulLstack Bootcamp' />
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Image
                                size='small'
                                src='https://static.wixstatic.com/media/ecafdf_61dcc60302284d0a82bbd6de19bb11df~mv2.png/v1/fill/w_1080,h_800,al_c/ecafdf_61dcc60302284d0a82bbd6de19bb11df~mv2.png'
                                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                            />
                        </Item>
                    </Item.Group>

                    <Divider clearing />

                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header content='Lecturer' />
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Image centered size='mini' circular src={users[1].avatar} />
                            <Item.Content>
                                <Item.Header content='itay_tu' />
                                <Item content={`Itay Turgeman`} />
                            </Item.Content>
                        </Item>
                    </Item.Group>

                    <Divider clearing />

                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header content='Tutor' />
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Image centered size='mini' circular
                                src='https://media-exp1.licdn.com/dms/image/C4D03AQGQSMt3fEPaDg/profile-displayphoto-shrink_200_200/0/1603087282942?e=1641427200&v=beta&t=JE3211AovdzhdAQNPqeUGSTWF5PUOJIBDGPMpCgFWTo' />
                            <Item.Content>
                                <Item.Header content='genib1989' />
                                <Item content={`Evgeni Bershadsky`} />
                            </Item.Content>
                        </Item>
                        <Item>
                            <Item.Image centered size='mini' circular src={users[3].avatar} />
                            <Item.Content>
                                <Item.Header content='mirale_yos' />
                                <Item content={`Mirale Yosman`} />
                            </Item.Content>
                        </Item>
                    </Item.Group>

                </Segment>
                <Segment>
                    <Item.Group>
                        <Item.Content>
                            <List horizontal divided style={{ width: '100%' }}>
                                <Item style={{ width: '25%' }}>
                                    <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }} >23</List.Content>
                                    <List.Content style={{ textAlign: 'center' }}>Students</List.Content>
                                </Item>
                                <Item style={{ width: '25%' }}>
                                    <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }} >1379</List.Content>
                                    <List.Content style={{ textAlign: 'center' }}>Posts</List.Content>
                                </Item>
                                <Item style={{ width: '25%' }}>
                                    <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }} >3115</List.Content>
                                    <List.Content style={{ textAlign: 'center' }} >Help</List.Content>
                                </Item>
                                <Item style={{ width: '25%' }}>
                                    <List.Content style={{ textAlign: 'center', fontWeight: 'bold' }} >9</List.Content>
                                    <List.Content style={{ textAlign: 'center' }} >Skills</List.Content>
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

                            </Item.Content>
                        </Item>
                    </Item.Group>

                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Description>
                                    Need help skills
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>

                </Segment>
            </Segment.Group>
        </>
    );
}