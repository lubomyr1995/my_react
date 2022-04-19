import {useEffect, useState} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../../components";
import css from './PostsPage.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(_ => {
        postsService.getAll(query.get('page'), 5).then(({data}) => setPosts(data))
    }, [query]);

    let queryObj = Object.fromEntries(query.entries())
    function nextPage() {
        // let page = query.get('page');
        // page = +page + 1;
        // setQuery({page: page.toString()});
        queryObj.page++
        setQuery(queryObj)
    }

    function prevPage() {
        queryObj.page--
        setQuery(queryObj)
    }

    return (
        <div className={css.wrapPost}>
            <div className={css.w40}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
            <div className={css.w55}><Outlet/></div>
        </div>
    );
};

export {PostsPage};
