import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from './PostPage.module.css'
import {postsService} from "../../services";
import {Post} from "../../components";

export const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])
    return (
        <div className={css.wrapPost}>
            <div className={css.w55}>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div className={css.w40}><Outlet/></div>
        </div>
    );
};