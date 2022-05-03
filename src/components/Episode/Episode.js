import css from './Episode.module.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeAction} from "../../redux/slices";

const Episode = ({episode: {id, name, air_date, episode, characters}}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
        dispatch(episodeAction.currentEpisode({episodeName: name}))
        navigate('/characters', {state: characters})
    }
    return (
        <div className={css.episode} onClick={toCharacters}>
            {id}) name: {name}; air_date: {air_date}; episode: {episode}
        </div>
    );
};

export {Episode};
