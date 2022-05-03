import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {Episode} from "../Episode/Episode";
import {episodeAction} from "../../redux/slices";
import css from './Episodes.module.css';

const Episodes = () => {
    const {episodes, next, prev} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(episodeAction.getAll({page: query.get('page')}))
    }, [dispatch, query]);

    const prevPage = () => {
        let prevPage = +query.get('page') - 1;
        setQuery({page: prevPage.toString()})
    }
    const nextPage = () => {
        let nextPage = +query.get('page') + 1;
        setQuery({page: nextPage.toString()})
    }
    return (
        <div>
            <div className={css.episodes}>{episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <div className={css.button}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};
