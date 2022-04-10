import {useEffect, useState} from "react";

import {Post} from "../Post/Post";
import {postService} from "../../services";

export const Posts = ({postByUserId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getPostById(postByUserId).then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};