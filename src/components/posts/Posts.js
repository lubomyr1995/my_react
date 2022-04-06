import React, {useEffect, useState} from 'react';
import {allService} from "../../services";
import {Post} from "../post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(_ => {
        allService.getPosts().then(value => setPosts(value.slice(0,10)))
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} item={post}/>)}
        </div>
    );
};
