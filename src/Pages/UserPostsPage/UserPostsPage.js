import {useEffect, useState} from "react";
import {usersService} from "../../Services";
import {UserPostDetail} from "../../Components";
import {useParams} from "react-router-dom";

const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        usersService.getPostsByUserId(id).then(({data}) => setPosts(data));
    }, [id]);
    return (
        <div>
            {posts.map(post => <UserPostDetail key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};
