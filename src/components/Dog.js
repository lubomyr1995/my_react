import {useDispatch} from "react-redux";

import {dogActions} from "../redux";

const Dog = ({dog}) => {
    const {id, name} = dog;
    const dispatch = useDispatch();
    return (
        <div>
            <b>{name}</b>
            <button onClick={() => {
                dispatch(dogActions.del({id}))
            }}>delete
            </button>
            <button onClick={() => {
                dispatch(dogActions.setUpdate({dog}))
            }}>update
            </button>
        </div>
    );
};

export {Dog};
