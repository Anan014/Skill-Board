import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';

export default function PostListItem({ post, users, deletepost,editPost }) {
    const initialValues = {
        title: post.title,
        category: [],
        description: [post.description],
    }

    // const []
    const [values,setValues] = useState(initialValues);

    function formatDate(string) {
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    function handleinputChange(e){

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
                            <Item.Header content={post.title} />
                            <Item.Description>
                                {post.description}
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
                    onClick={() => editPost(post.postId)}
                    // as={Link} to={`/posts/${post.id}`}
                    color='teal'
                    floated='right'
                    content='Edit'
                />
            </Segment>
        </Segment.Group>
    );
}