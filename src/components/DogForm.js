import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {dogActions} from "../redux";

const DogForm = () => {
    const [dogName, setDogName] = useState('');
    const {dog} = useSelector(({dogs}) => dogs);
    const dispatch = useDispatch();
    useEffect(() => {
        if (dog) {
            setDogName(dog.name)
        }
    }, [dog]);

    function add() {
        if (dog) {
            dispatch(dogActions.update({id: dog.id, name: dogName}))
        } else {
            dispatch(dogActions.add({name: dogName}))
        }
        setDogName('');
    }

    return (
        <div>
            <label htmlFor="{'dog'}">DogName:
                <input name={'dog'} type="text"
                       onChange={(e) => setDogName(e.target.value)}
                       value={dogName}/></label>
            <button onClick={add}>{dog ? 'update' : 'create'}</button>
        </div>
    );
};

export {DogForm};
