import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import PostForm from '../postForm/PostForm';
import PostList from './PostList';
import cuid from 'cuid';
import { useHistory } from 'react-router';
import RightSideBar from '../../rightSideBar/RightSideBar';
import LeftSideBar from '../../leftSideBar/LeftSideBar';

export default function PostDashboard() {
    const [users, setUsers] = useState(null);
    const [editPost, setEditPost] = useState(null);
    const [createPost, setCreatePost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [editPostObj, setEditPostObj] = useState(null);
    const history = useHistory()

    const skillsArray = [
        { skill: 'git', icon: 'git' },
        { skill: 'HTML5', icon: 'html5' },
        { skill: 'CSS3', icon: 'css3' },
        { skill: 'SASS', icon: 'sass' },
        { skill: 'React JS', icon: 'react' },
        { skill: 'Node JS', icon: 'node js' },
        { skill: 'Github', icon: 'github' },
        { skill: 'Wordpress', icon: 'wordpress' },
    ];

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

    function handleEditPost(returnedEditedObject) {
        console.log(returnedEditedObject);
        setEditPostObj(posts.filter(post => post.postId === returnedEditedObject.postId));
        console.log(editPostObj);
    }

    // useEffect(() => {
    //     console.log(editPostObj);
    // }, [editPostObj])

    async function handleDeletePost(postObj) {
        const apiRequest = await axios.delete(`https://6182357a84c2020017d89d16.mockapi.io/users/${postObj.userId}/Posts/${postObj.postId}`)
        if (apiRequest.status === 200) {
            setPosts(posts.filter(post => post.postId !== postObj.postId));
        }
    }

    async function handleCreatePost(postFromSon) {
        const apiRequest = await axios.post(`https://6182357a84c2020017d89d16.mockapi.io/users/${postFromSon.userId}/Posts`, postFromSon)
        if (apiRequest.status === 201) {
            let tempPosts = [...posts, apiRequest.data];
            tempPosts.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt); // ascending
            });
            setPosts(tempPosts);
        }
    }


    return (
        <Grid>
            <Grid.Column width={4}>
            {users ?
                <LeftSideBar
                    users={users}
                    skillsArray={skillsArray}
                />
                :
                'Loading Left sidebar'}
            </Grid.Column>

            <Grid.Column width={8}>
                <PostForm
                    selectedPost={handleSelectedPost}
                    editPostObj={editPostObj}
                    createPost={handleCreatePost}
                />
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

            <Grid.Column width={4}>
                {users ?
                    <RightSideBar
                        user={users[0]}
                        skillsArray={skillsArray}
                    />
                    :
                    'Loading Profile'}
            </Grid.Column>
        </Grid>
    );
}