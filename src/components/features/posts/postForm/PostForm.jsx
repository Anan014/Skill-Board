import React from 'react';
import {Segment,Header,Form,Button} from 'semantic-ui-react';

export default function PostForm({editPost,editPostObj}) {
    function handleFormSubmit(e){
        console.log(e);
    }

    return (
        <Segment clearing>
        {/* {selectedEvent ? 'Edit the event' : 'Create new event'} */}
            <Header content='Create new post' />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Post title'
                        name='title'
                        // value={values.title}
                        // onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Category'
                        name='category'
                        // value={values.category}
                        // onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Description'
                        name='description'
                        // value={values.description}
                        // onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='City'
                        name='city'
                        // value={values.city}
                        // onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='text'
                        placeholder='Venue'
                        name='venue'
                        // value={values.venue}
                        // onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                        type='date'
                        placeholder='Date'
                        name='date'
                        // value={values.date}
                        // onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button
                    // as={Link} to='/events'
                    type='submit'
                    floated='right'
                    content='Cancel'
                />
            </Form>
        </Segment>
    );
}