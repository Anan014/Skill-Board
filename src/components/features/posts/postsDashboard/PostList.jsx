import cuid from 'cuid';
import React from 'react';
import PostListItem from './PostListItem';

export default function PostList({ users, editPost, posts, deletepost }) {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     getPostsData();
    //     //eslint-disable-next-line
    // }, []);



    // async function getPostsData() {
    //     let data = users.map(async (user) => {
    //         return await axios.get(`https://6182357a84c2020017d89d16.mockapi.io/users/${user.id}/Posts`);
    //     });
    //     let myArrayTest = [];
    //     let posts = await Promise.all(data);
    //     posts.map(post => {
    //         return myArrayTest = myArrayTest.concat(...post.data)
    //     })
    //     myArrayTest.sort((a,b)=>{
    //         return new Date(b.createdAt) - new Date(a.createdAt); // ascending
    //     });
    //     setPosts(myArrayTest);
    // }
    // console.log('Posts', posts);


    return (
        <div>
            {posts ?
                posts.map(post => (
                    <PostListItem
                        users={users}
                        post={post}
                        key={cuid()}
                        deletepost={deletepost}
                        editPost={editPost}
                    />
                ))
                :
                'Loading posts'}

        </div>
    );
}