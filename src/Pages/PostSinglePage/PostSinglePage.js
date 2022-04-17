import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../Services";
import {PostDetail} from "../../Components";

const PostSinglePage = () => {
    let {id} = useParams();
    let {state} = useLocation();

    let [post, setPost] = useState(state);
    useEffect(() => {
        if (!state) {
            postsService.getById(id).then(({data}) => setPost(data));
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

export {PostSinglePage};
