import React, { useState } from 'react';
import { Segment, Header, Form, Button, TextArea, Input } from 'semantic-ui-react';
// import cuid from 'cuid';

export default function PostForm({ editPost, editPostObj, createPost }) {

    // const createPostValues = {
    //     // postWantHelpSkill: [],
    //     // postTeachSkill: [],
    //     // postId: Date.now(),
    //     userId: 2,
    //     title:'',
    //     description:''
    // }

    const [postValues, setPostValues] = useState({
        // postWantHelpSkill: [],
        // postTeachSkill: [],
        // postId: Date.now(),
        userId: 2,
        title: '',
        description: '',
        createdAt:''
    });

    function handleFormSubmit() {
        const time = (new Date(Date.now())).toISOString();
        createPost({ ...postValues, createdAt: time });
        setPostValues({ ...postValues, title: '', description: '' })
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setPostValues({ ...postValues, [name]: value })
    }

    return (
        <Segment clearing>
            {/* {selectedEvent ? 'Edit the event' : 'Create new event'} */}
            <Header content='Create new post' />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <Input
                        type='text'
                        placeholder='Post title'
                        name='title'
                        value={postValues.title}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <TextArea
                        type='text'
                        placeholder='Description'
                        name='description'
                        value={postValues.description}
                        onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                {/* <Button
                    // as={Link} to='/events'
                    type='submit'
                    floated='right'
                    content='Cancel'
                /> */}
            </Form>
        </Segment>
    );
}