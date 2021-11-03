import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PostForm from '../postForm/PostForm';
import PostList from './PostList';


export default function PostDashboard() {
    const [users, setUsers] = useState(null);
    const [editPost, setEditPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [editPostObj, setEditPostObj] = useState(null);

    const skillsArray = ['android', 'angular', 'css3', 'cuttlefish', 'gulp', 'js', 'laravel', 'less', 'node js', 'npm'];

    useEffect(() => {
        getUsersData();
        //eslint-disable-next-line
    }, [])

    async function getUsersData() {
        const usersData = await axios.get('https://6182357a84c2020017d89d16.mockapi.io/users');
        setUsers(usersData.data);
        getPostsData(usersData.data);
    }

    async function getPostsData(myUsersData) {
        let data = myUsersData.map(async (user) => {
            return await axios.get(`https://6182357a84c2020017d89d16.mockapi.io/users/${user.id}/Posts`);
        });
        let myArrayTest = [];
        let posts = await Promise.all(data);
        posts.map(post => {
            return myArrayTest = myArrayTest.concat(...post.data)
        })
        myArrayTest.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt); // ascending
        });
        setPosts(myArrayTest);
    }


    function handleSelectedPost(event) {
        console.log(event);
    }

    function handleEditPost(event) {
        setEditPostObj(posts.filter(post => post.postId === event));
    }

    function handleDeletePost(postId) {
        setPosts(posts.filter(post => post.postId !== postId));
    }

    return (
        <Grid>
            <Grid.Column width={16}>
                <PostForm
                    selectedPost={handleSelectedPost}
                    editPost={editPost}
                    editPostObj={editPostObj}
                />
                <h2>Posts</h2>
                {users ?
                    <PostList
                        users={users}
                        editPost={handleEditPost}
                        posts={posts}
                        deletepost={handleDeletePost}
                    />
                    :
                    'Loading...'
                }
            </Grid.Column>
        </Grid>
    );
}