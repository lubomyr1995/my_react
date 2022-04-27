import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {catActions} from "../redux";

const CatForm = () => {
    const [catName, setCatName] = useState('');
    const dispatch = useDispatch();
    const {cat} = useSelector(({cats}) => cats);
    useEffect(() => {
        if (cat) {
            setCatName(cat.name)
        }
    }, [cat]);

    function add() {
        if (cat) {
            dispatch(catActions.update({id: cat.id, name: catName}))
        } else {
            dispatch(catActions.add({name: catName}))
        }
        setCatName('')

    }

    return (
        <div>
            <label htmlFor="{'cat'}">CatName:
                <input name={'cat'} type="text"
                       onChange={(e) => setCatName(e.target.value)}
                       value={catName}/></label>
            <button onClick={add}>{cat ? 'update' : 'create'}</button>
        </div>
    );
};

export {CatForm};
