import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {catActions} from "../../redux";

const CatForm = () => {
    const [name, setName] = useState('');
    const {cat} = useSelector(state => state.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cat) {
            setName(cat.name)
        }
    }, [cat]);

    const add = () => {
        if (cat) {
            dispatch(catActions.update({id: cat.id, name}))
        } else {
            dispatch(catActions.add({name}))
        }
        setName('')
    }
    return (
        <div>
            <label htmlFor="{'cat'}">Cat: <input name={'cat'} type="text"
                                                 onChange={(e) => setName(e.target.value)}
                                                 value={name}/></label>
            <button onClick={add}>{cat ? 'update' : 'create'}</button>
        </div>
    );
};

export {CatForm};
