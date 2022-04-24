import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {UserPosts} from "../../components";

const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(_ => {
        usersService.getPostsByUserId(id).then(({data}) => setPosts(data))
    }, [id]);
    return (
        <div>
            {posts.map(post => <UserPosts key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};
