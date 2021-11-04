import React from 'react';
import { Segment, Item, List, Divider, Button } from 'semantic-ui-react';

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
                                <Item.Header content='Chat' />
                            </Item.Content>
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular src='https://media-exp1.licdn.com/dms/image/D4D35AQGREY0RBr7KPg/profile-framedphoto-shrink_200_200/0/1635440596186?e=1636110000&v=beta&t=OWf2aU3xiRe0TowTxpJaO6d0GYwLzrdozQIw1jI1BXk' />
                            <Item.Content>
                                <Item.Header content='Samer Amer' />
                                <Item content={`Online`} />
                            </Item.Content>
                            <Button icon='chat'  color='green' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular src={users[1].avatar} />
                            <Item.Content>
                                <Item.Header content='Adeeb Khanjar' />
                                <Item content={`Online`} />
                            </Item.Content>
                            <Button icon='chat' color='green' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4D35AQEQG_M94i-wUw/profile-framedphoto-shrink_200_200/0/1614778828012?e=1636110000&v=beta&t=-ce9Iz1aFuVtNOR4rBB9lilWSdKdWDLGd_jbjH3apDg' />
                            <Item.Content>
                                <Item.Header content='Mahde Halabi' />
                                <Item content={`Online`} />
                            </Item.Content>
                            <Button icon='chat' color='green' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4D03AQEHlQGDPN9Zow/profile-displayphoto-shrink_200_200/0/1608663746682?e=1641427200&v=beta&t=rRuDxg74lziiEtVjB1LhiQ2xXrcrI61LvpSwpG84Ea0' />
                            <Item.Content>
                                <Item.Header content='Yousef Gadban' />
                                <Item content={`Online`} />
                            </Item.Content>
                            <Button icon='chat' color='green' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D4E03AQGf-Wc4rrVnbA/profile-displayphoto-shrink_200_200/0/1630581632079?e=1641427200&v=beta&t=iQmxDNc7Fj6MgwXwTxpWYux7HS1vAORRRxANGdPJI98' />
                            <Item.Content>
                                <Item.Header content='Meriam Majadly' />
                                <Item content={`Online`} />
                            </Item.Content>
                            <Button icon='chat' color='green' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C5603AQHwSoxY2lXBlw/profile-displayphoto-shrink_200_200/0/1535839325134?e=1641427200&v=beta&t=KM8vfMWAvmuttDRLy0rFCQiEx4XFig4ViOGyblncqsU' />
                            <Item.Content>
                                <Item.Header content='Hitham Nas' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4D35AQGLD-qy6kXgKg/profile-framedphoto-shrink_200_200/0/1597645783567?e=1636110000&v=beta&t=8XiWi4hO1DYxUMQrywFybzXCgKklOLqIiONx0fkFckc' />
                            <Item.Content>
                                <Item.Header content='Omri Zaher' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4D03AQE2y9aMJBBxFQ/profile-displayphoto-shrink_200_200/0/1603140248975?e=1641427200&v=beta&t=dqSq5LG_Oub1LdEbpjcw95UGM5V-5ysqLGeRHOC-Tss' />
                            <Item.Content>
                                <Item.Header content='Rawnak Araidy' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4E03AQEZeWA-jP3Pdg/profile-displayphoto-shrink_200_200/0/1615316145882?e=1641427200&v=beta&t=FcQU15iq10kvMNDJrnQXOqz7I773CQVfsD0gEtwV1Ww' />
                            <Item.Content>
                                <Item.Header content='Sahr Ghanem' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D4D35AQGNL5NvLryxGA/profile-framedphoto-shrink_200_200/0/1623242670366?e=1636110000&v=beta&t=FZvPeRTW4BevbRFD3qVuBHnq5QkYqMac7z5O2_pTDWw' />
                            <Item.Content>
                                <Item.Header content='Ameer Lala' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C5635AQHwrJTVbYAmlQ/profile-framedphoto-shrink_200_200/0/1597045345801?e=1636110000&v=beta&t=dtpF8JnpD0yq8lg-RVDNMf8Z1ktI1mNJsWEqUnJd8Po' />
                            <Item.Content>
                                <Item.Header content='Saleh Faraj ' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D4D35AQFlFTTKS1bWZA/profile-framedphoto-shrink_200_200/0/1634803549679?e=1636110000&v=beta&t=GwsB4vGpglROw4gWbLvfcPWDf--p4PeKushr0eUZpqU' />
                            <Item.Content>
                                <Item.Header content='Rawi Lahiani' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D4D35AQHhIpXEvLDtUg/profile-framedphoto-shrink_200_200/0/1634759855661?e=1636110000&v=beta&t=dYJ5J5lL6VsMnYpFrQFobE02R2_DT9nBMvSHQTee-iE' />
                            <Item.Content>
                                <Item.Header content='Ameer Abotaref' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4D03AQHlql9lj7LrkA/profile-displayphoto-shrink_200_200/0/1623929008423?e=1641427200&v=beta&t=AsStYykgKatPbXBL7nsycuhwYLRwt8sqIQ78W1hjDvs' />
                            <Item.Content>
                                <Item.Header content='Karim Kablan' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D4E35AQEzsLLt0XAwdw/profile-framedphoto-shrink_200_200/0/1635417216531?e=1636110000&v=beta&t=JXYt8Zib62x19RhUY92X5HOp50TZtGI3XI1tcXmyVA4' />
                            <Item.Content>
                                <Item.Header content='Timor Salah' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D4D03AQH6jg6KBWbFIQ/profile-displayphoto-shrink_200_200/0/1629732819601?e=1641427200&v=beta&t=ejOMJlzTbLBbHvGjP3XtWknYKvtk_-M6qNs-NC8VcrQ' />
                            <Item.Content>
                                <Item.Header content='Asad Hmeed' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/D5635AQFOkoLmYNljsQ/profile-framedphoto-shrink_200_200/0/1635419984179?e=1636110000&v=beta&t=0tGKldoQF5SWNjhxLiWqUVa5P1NCc18DMynQC1XDFLw' />
                            <Item.Content>
                                <Item.Header content='Ayal Khanjar' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>
                        <Divider clearing />

                        <Item>
                            <Item.Image centered size='mini' circular
                            src='https://media-exp1.licdn.com/dms/image/C4D03AQHSeBxlVLPWVQ/profile-displayphoto-shrink_200_200/0/1634230177308?e=1641427200&v=beta&t=uA-9tp_9WfTnLx-AOKIYuMWLyOqbaRfBNqVarozBl1s' />
                            <Item.Content>
                                <Item.Header content='Shadi Rada' />
                                <Item content={`Offline`} />
                            </Item.Content>
                            <Button disabled icon='chat' color='red' />
                        </Item>

                    </Item.Group>

                </Segment>
            </Segment.Group>
        </>
    );
}