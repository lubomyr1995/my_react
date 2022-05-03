import css from './Header.module.css';
import {useSelector} from "react-redux";

const Header = () => {
    const {currentEpisode} = useSelector(state => state.episodes);
    return (
        <div className={css.header}>
            <div>Rick&Morty </div>
            {currentEpisode && <div>{currentEpisode}</div>}
        </div>
    );
};

export {Header};
