import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Icon, Input, Item, Segment, TextArea } from 'semantic-ui-react';

export default function PostListItem({ post, users, deletepost, editPost }) {
    const initialValues = {
        title: post.title,
        description: post.description,
    };

    const [editButtonClicked, setEditButtonClicked] = useState(false);
    const [values, setValues] = useState(initialValues);


    function formatDate(string) {
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    function handleinputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
        // editPost(values);
    }

    return (
        <Segment.Group>
            <Segment secondary>
                <Item.Group>
                    <Item>
                        <Item.Image size='mini' circular src={users[post.userId - 1].avatar} />
                        <Item.Content>
                            <Item.Header content={users[post.userId - 1].userName} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header>
                                {editButtonClicked ?
                                    <Input
                                        type='text'
                                        placeholder='Event title'
                                        name='title'
                                        value={values.title}
                                        onChange={(e) => handleinputChange(e)}
                                    />
                                    :
                                    values.title}
                            </Item.Header>
                            <Item.Description>
                                {editButtonClicked ?
                                    <TextArea
                                        style={{ height: '10rem', width: '100%', marginTop: '1rem' }}
                                        type='text'
                                        placeholder='Event title'
                                        name='description'
                                        value={values.description}
                                        onChange={(e) => handleinputChange(e)}
                                    />
                                    :
                                    values.description}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>

                <span>
                    <Icon name='clock' /> {formatDate(post.createdAt)}
                    <Icon name='marker' /> {users[post.userId - 1].city}
                </span>
            </Segment>
            <Segment secondary clearing>
                <Button
                    onClick={() => deletepost(post.postId)}
                    color='red'
                    floated='right'
                    content='Delete'
                />
                <Button
                    onClick={() => setEditButtonClicked(!editButtonClicked)}
                    // as={Link} to={`/posts/${post.id}`}
                    color='teal'
                    floated='right'
                    content={editButtonClicked ? 'Done' : 'Edit'}
                />
            </Segment>
        </Segment.Group>
    );
}