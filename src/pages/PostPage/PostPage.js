import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {PostDetail} from "../../components";

const PostPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    useEffect(_ => {
        if (!state) {
            postsService.getById().then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [id, state]);
    return (
        <div>
            {post && <PostDetail post={post}/>}
            <Outlet/>
        </div>
    );
};

export {PostPage};
