import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {dogActions} from "../../redux";

const DogForm = () => {
    const [name, setName] = useState('');

    const {dog} = useSelector(state => state.dogs);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dog) {
            setName(dog.name)
        }
    }, [dog]);

    function add() {
        if (dog) {
            dispatch(dogActions.update({id: dog.id, name}))
        } else {
            dispatch(dogActions.add({name}))
        }
        setName('')
    }

    return (
        <div>
            <label htmlFor="{'dog'}">Dog: <input name={'dog'} type="text"
                                                 onChange={(e) => setName(e.target.value)}
                                                 value={name}/></label>
            <button onClick={add}>{dog ? 'update' : 'create'}</button>

        </div>
    );
};

export {DogForm};
