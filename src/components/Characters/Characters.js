import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "../Character/Character";
import css from './Characters.module.css';

const Characters = () => {
    const {state} = useLocation();
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    }, [state]);
    return (
        <div className={css.characters}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};
